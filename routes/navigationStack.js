import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, CardStackStyleInterpolator} from 'react-navigation';
import QueueHome from '../screen/QueueHome';
import MemberHome from '../screen/MemberHome';
import OptumLogo from '../screen/OptumLogo';
import FragmentHome from '../FragmentHome';
import ModalWindow from '../ModalWindow';
import FadeInParent from '../FadeInParent';
import Animated, { Easing } from 'react-native-reanimated';

const screens = {
    OptumLogo : {
        screen : OptumLogo,
        mode : 'card',
        navigationOptions : {
        headerShown : false
        }
    },
    QueueHome : {
        screen : QueueHome
    },
    MemberHome : {
        screen : MemberHome
    }
}
// const screens = {
//      FragmentHome : {
//          screen : FragmentHome
//      }
// }
// const screens = {
//     ModalWindow : {
//         screen : ModalWindow
//     }
// }

// const screens = {
//     OptumLogo : {
//         screen : OptumLogo
//     }
// }

const transitionConfig = () => {
    return {
        transitionSpec : {
            duration : 750,
            easing : Easing.out(Easing.poly(4)),
            timing : Animated.timing,
            useNativeDriver : true
        },
        screenInterpolator : sceneProps => {
            console.log("sdfsdf");
            const {layout, position, scene} = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth
            
            const translateX = position.interpolate({
                inputRange : [thisSceneIndex - 1, thisSceneIndex],
                outputRange : [width, 0]
            })

            return {transform : [{translateX}]}
        }
    }
}


const NavStack = createStackNavigator(screens, {transitionConfig : transitionConfig});

export default createAppContainer(NavStack);