import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Alert, Text, View } from "react-native";
import calculation_data_input_form from "./CalculationDataInputForm.styles";
import CheckLabel from "../CheckLabel/CheckLabel";
import NumericInput from "../../../../../Components/NumericInput/NumericInput";
import { armyTiers, armyTypes, IconPathConsts } from "../../../../../utills/enums";
import { calculateTrainingResultsBySpeedUps, calculateTrainingResultsByArmyCount, validateTrainingCalculationParams, resultCardsTypes } from "../../../../../utills/functions/resourcesCalculationFunctions";
import ElevatedButton from "../../../../../Components/ElevatedButton/ElevatedButton";
import { colors } from "../../../../../utills/sharedStyles.styles";
import { trainingCalculatorMode } from "../ModeSwitch/ModeSwitch";
import { validateStringReturnNumber } from "../../../../../utills/functions/validation.functions";
import { calculationResultsPlaceholder } from "../../../../../utills/consts";

type Props = {
  childToParent: (calculationResults: Record<resultCardsTypes, number>) => void
  mode: trainingCalculatorMode,
}

function CalculationDataInputForm({ childToParent, mode }: Props): React.JSX.Element {
  const [armyCount, setArmyCount] = useState(0)
  const [trainingSpeedArmyMode, setTrainingSpeedArmyMode] = useState(0)
  const [subsidyArmyMode, setSubsidyArmyMode] = useState(0)

  const [speedUpsCount, setSpeedUpsCount] = useState(0)
  const [trainingSpeedSpeedUpsMode, setTrainingSpeedSpeedUpsMode] = useState(0)
  const [subsidySpeedUpsMode, setSubsidySpeedUpsMode] = useState(0)

  const [currentArmyTypeSelect, setCurrentArmyTypeSelect] = useState<armyTypes>(armyTypes.infantry)
  const [currentTierSelect, setCurrentTierSelect] = useState<armyTiers>(armyTiers.tier1)

  const isArmyCountMode = mode === trainingCalculatorMode.armyCount

  const armyTypeLabelsInfo = useMemo( () => [
      { id: 1, text: armyTypes.infantry, iconUri: IconPathConsts.infantryIcon },
      { id: 2, text: armyTypes.ranged, iconUri: IconPathConsts.rangedIcon },
      { id: 3, text: armyTypes.cavalry, iconUri: IconPathConsts.cavalryIcon },
      { id: 4, text: armyTypes.siege, iconUri: IconPathConsts.siegesIcon },
    ],[])

  const tierLabelsInfo = useMemo( () => [
      { id: 1, text: armyTiers.tier1 },
      { id: 2, text: armyTiers.tier2 },
      { id: 3, text: armyTiers.tier3 },
      { id: 4, text: armyTiers.tier4 },
    ],[])

  const selectedArmyTypeId = armyTypeLabelsInfo.find((item) => item.text === currentArmyTypeSelect)?.id ?? 0

  const selectedTierId = tierLabelsInfo.find((item) => item.text === currentTierSelect)?.id ?? 0

  function calculateDataArmyMode(): Record<resultCardsTypes, number> {
    const params = {
      trainingSpeed: trainingSpeedArmyMode,
      subsidy: subsidyArmyMode,
      armyType: currentArmyTypeSelect,
      tier: currentTierSelect,
    }

    const validationError = validateTrainingCalculationParams({...params, armyCount: armyCount})

    if (validationError) {
      Alert.alert(validationError)
      return calculationResultsPlaceholder
    }

    return calculateTrainingResultsByArmyCount({...params, armyCount: armyCount}, mode)
  }

  function calculateDataSpeedUpsMode(): Record<resultCardsTypes, number> {
    const params = {
      trainingSpeed: trainingSpeedSpeedUpsMode,
      subsidy: subsidySpeedUpsMode,
      armyType: currentArmyTypeSelect,
      tier: currentTierSelect,
    }

    const validationError = validateTrainingCalculationParams({...params, speedUpsCountInDays: speedUpsCount})

    if (validationError) {
      Alert.alert(validationError)
      return calculationResultsPlaceholder
    }

    return calculateTrainingResultsBySpeedUps({...params, speedUpsCountInDays: speedUpsCount}, mode)
  }

  const calculateAndSendData = useCallback(() => {
    isArmyCountMode ?
    childToParent(calculateDataArmyMode()) :
    childToParent(calculateDataSpeedUpsMode())
  }, [
    armyCount,
    trainingSpeedArmyMode,
    subsidyArmyMode,
    trainingSpeedSpeedUpsMode,
    subsidySpeedUpsMode,
    currentArmyTypeSelect,
    currentTierSelect,
    childToParent,
  ])

  return (
    <View style={calculation_data_input_form.wrapper}>
      <View style={calculation_data_input_form.check_labels_wrapper}>
        <View style={calculation_data_input_form.select_section}>
          {armyTypeLabelsInfo.map((label) => (
            <View key={label.id} style={calculation_data_input_form.check_label_wrapper}>
              <CheckLabel
                itemId={label.id}
                text={label.text}
                selectedId={selectedArmyTypeId}
                onPress={(text) => setCurrentArmyTypeSelect(text as armyTypes)}
                iconUri = {label.iconUri}
              />
            </View>
          ))}
        </View>

        <View style={calculation_data_input_form.select_section}>
          {tierLabelsInfo.map((label) => (
            <View key={label.id} style={calculation_data_input_form.check_label_wrapper}>
              <CheckLabel
                itemId={label.id}
                text={label.text}
                selectedId={selectedTierId}
                onPress={(text) => setCurrentTierSelect(text as armyTiers)}
                iconUri = ""
              />
            </View>
          ))}
        </View>
      </View>
      <View
        key={isArmyCountMode ? "army-mode" : "speedups-mode"}
        style={calculation_data_input_form.inputs_wrapper}
      >
        {isArmyCountMode ? (
          <>
            <View style={calculation_data_input_form.input_and_label_wrapper}>
              <Text style={calculation_data_input_form.text_input_labels}>
                Training speed:
              </Text>
              <NumericInput
                placeholder="100"
                styles={calculation_data_input_form.input}
                minValue={0}
                maxValue={999}
                setParentElementState={setTrainingSpeedArmyMode}
              />
            </View>

            <View style={calculation_data_input_form.input_and_label_wrapper}>
              <Text style={calculation_data_input_form.text_input_labels}>
                Army count:
              </Text>
              <NumericInput
                placeholder="100.000"
                styles={calculation_data_input_form.input}
                minValue={0}
                maxValue={999_999_999}
                setParentElementState={setArmyCount}
              />
            </View>

            <View style={calculation_data_input_form.input_and_label_wrapper}>
              <Text style={calculation_data_input_form.text_input_labels}>
                Subsidy:
              </Text>
              <NumericInput
                placeholder="40"
                styles={calculation_data_input_form.input}
                minValue={0}
                maxValue={40}
                maxLength={3}
                setParentElementState={setSubsidyArmyMode}
              />
            </View>
          </>
        ) : (
          <>
            <View style={calculation_data_input_form.input_and_label_wrapper}>
              <Text style={calculation_data_input_form.text_input_labels}>
                Training speed:
              </Text>
              <NumericInput
                placeholder="100"
                styles={calculation_data_input_form.input}
                minValue={0}
                maxValue={999}
                setParentElementState={setTrainingSpeedSpeedUpsMode}
              />
            </View>

            <View style={calculation_data_input_form.input_and_label_wrapper}>
              <Text style={calculation_data_input_form.text_input_labels}>
                Speed ups (days):
              </Text>
              <NumericInput
                placeholder="100"
                styles={calculation_data_input_form.input}
                minValue={0}
                maxValue={999_999_999}
                setParentElementState={setSpeedUpsCount}
              />
            </View>

            <View style={calculation_data_input_form.input_and_label_wrapper}>
              <Text style={calculation_data_input_form.text_input_labels}>
                Subsidy:
              </Text>
              <NumericInput
                placeholder="40"
                styles={calculation_data_input_form.input}
                minValue={0}
                maxValue={40}
                maxLength={3}
                setParentElementState={setSubsidySpeedUpsMode}
              />
            </View>
          </>
        )}
      </View>

      <View style = {calculation_data_input_form.button_wrapper}>
        <ElevatedButton onPress = {() => {calculateAndSendData()}} 
            title = "Calculate" colors = {[colors.bgPrimary, colors.surfaceRaised]}/>
      </View>

    </View>
  );
}

export default CalculationDataInputForm;