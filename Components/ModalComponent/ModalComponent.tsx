import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import modal_component from './ModalComponent.styles';
import ImageInWrapper from '../ImageInWrapper/ImageInWrapper';
import { IconPathConsts } from '../../utills/enums';

type Props = {
    visible: boolean,
    children: React.JSX.Element,
    isInnerModalActive?: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function ModalComponent({visible, children, isInnerModalActive, setVisible}: Props): React.JSX.Element {

    return(
        <View style = {[modal_component.wrapper,
        visible ? {height: "100%", width: "100%", zIndex: 100} : {height: 0, width: 0, zIndex: -1}]}>
            <TouchableOpacity style = {modal_component.background}/>
            <View style = {modal_component.content}>
            {
                isInnerModalActive ? <View style = {modal_component.closing_icon_line}></View> :
                
                <View style = {modal_component.closing_icon_line}>
                    <ImageInWrapper imageSource = {IconPathConsts.closeIcon} wrapperStyles = {modal_component.closing_icon}
                        onPress = {() => {
                            if(!isInnerModalActive)
                            setVisible(false)
                        }}/>
                </View>
            }
                
                {children}
            </View>
        </View>
    );
}

export default ModalComponent