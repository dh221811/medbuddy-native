import { createStackNavigator } from '@react-navigation/stack';
import{ NavigationContainer} from '@react-navigation/native'; 
import Home from './screens/Home';
import SelectLanguage from './screens/SelectLanguage';
import Form from './screens/Form';
import Preview from './screens/Preview';
import Information from './screens/Information';
import MedForm from './screens/MedForm';
import VideoPlayer from './screens/VideoPlayer';
import Agreement from './screens/Agreement';
import FAQ from './screens/FAQ';



const MedBuddyStack = createStackNavigator();

const screenOptions = {
    headerShown: false, // Hide the header for all screens
  };

function HomeMedBuddy() {
    return (
      <MedBuddyStack.Navigator screenOptions={screenOptions} >        
        <MedBuddyStack.Screen name="Home" component={Home} />
        <MedBuddyStack.Screen name="SelectLanguage" component={SelectLanguage} />
        <MedBuddyStack.Screen name="Form" component={Form} />
        <MedBuddyStack.Screen name="Preview" component={Preview} />
        <MedBuddyStack.Screen name="VideoPlayer" component={VideoPlayer} />
        <MedBuddyStack.Screen name="Information" component={Information} />
        <MedBuddyStack.Screen name="MedForm" component={MedForm} />
        <MedBuddyStack.Screen name="Agreement" component={Agreement} />
        <MedBuddyStack.Screen name="FAQ" component={FAQ} />
      </MedBuddyStack.Navigator>
    )
  }
  export default function Navigation (){
    return(
        <NavigationContainer>
            <HomeMedBuddy />
        </NavigationContainer>
    )
  }