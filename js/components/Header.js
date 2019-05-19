import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Platform, DeviceInfo } from 'react-native'

const NAV_BAR_HEIGHT_IOS = 44;//导航栏在iOS中的高度
const NAV_BAR_HEIGHT_ANDROID = 50;//导航栏在Android中的高度
const STATUS_BAR_HEIGHT = DeviceInfo.isIPhoneX_deprecated ? 0 : 20;//状态栏的高度

export default class Header extends Component {
    render() {
        const { title, noTitle, leftButton, rightButton } = this.props;
        const Title =
            <View style={styles.navBar}>
                {leftButton || null}
                {
                    noTitle ?
                        null :
                        <View style={styles.navBarTitleContainer}>
                            <Text ellipsizeMode="head" numberOfLines={1} style={styles.title}>{title}</Text>
                        </View>
                }
                {rightButton || null}
            </View>;

        return (
            <View>
                <StatusBar barStyle="light-content" hidden={false} />
                {Title}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2196f3'
    },
    navBarButton: {
        alignItems: 'center'
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
    },
    navBarTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: 'white',
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
    }
});