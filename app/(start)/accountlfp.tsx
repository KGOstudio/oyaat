import LoadingAnimation from '@/components/LoadingAnimation'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Pressable, Text, TextInput, View } from 'react-native'
import { colors } from '../../assets/colors'
import AniText from '../../components/AniText'

import { Ionicons } from '@expo/vector-icons'








import emailjs from 'emailjs-com'

emailjs.init('MSlbl_86Nr9Esi1II');

export default function accountlfp() {








    const [ani, setAni] = useState({
        loading: false,
        loading2: true,
        loadVerify: false,
        loadLUVerify: false,
    });

      const [expanded, setExpanded] = useState(false);
  const widthAnim = useRef(new Animated.Value(0)).current;
  const marginAnim = useRef(new Animated.Value(20)).current;

  const toggle = () => {
    Animated.parallel([
      Animated.timing(widthAnim, {
        toValue: expanded ? 100 : 300,
        duration: 500,
        useNativeDriver: false, // layout properties require false
      }),
      Animated.timing(marginAnim, {
        toValue: expanded ? 20 : 100,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(() => setExpanded(!expanded));
  };

    const sendEmail = async () => {
        try {

            const vaild = Math.floor(10000 + Math.random() * 90000).toString();
            setVaildText(vaild);
            setVaildText(vaild);
            setVaildText(vaild);

            console.log(vaild);
            console.log(validText);
            

            const result = await emailjs.send(
            'service_i3mnnbb',
            'template_esw2dsq',
            {
                passcode: vaild,
                time: 1500,
                email: "weko08531@gmail.com",
            }
            );
            console.log('Email sent successfully!', result.status);
        } catch (error) {
            console.error('Email sending failed:', error);
        }
    };

    const [isValid, setIsValid] = useState(false);
    const [validText, setVaildText] = useState("");
    const [validTextInput, setVaildTextInput] = useState("");



  const borderColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(borderColor, {
      toValue: isValid ? 1 : 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, [isValid]);

  const borderColorInterpolation = borderColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ccc', 'green'], // from gray to green
  });

      





  return (
    <View
        className="bg-white"
        style={{backgroundColor: colors.deepSpace, flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%'}}
    >
      <View className="items-center mb-6 px-6" style={{paddingHorizontal: 24, position: "absolute", top: 120}}>
        <Text
          className="text-whiteSmoke text-2xl font-bold"
          style={{color: colors.whiteSmoke, fontSize: 24, fontWeight: "700", textAlign: "left"}}
        >
          Let's make your account!
        </Text>
        <Text
          className="text-satelliteGray text-center mt-2"
          style={{color: colors.satelliteGray, textAlign: "left", marginTop: 8}}
        >
          To get started, we'll need some basic information to create your account. 
        </Text>
      </View>

     <View className="w-full mt-8 px-6" style={{width: '100%', marginTop: 32, paddingHorizontal: 24}}>
        {/* Form will go here */}
       
        <TextInput 
            placeholder="Email Address"
            placeholderTextColor={colors.satelliteGray}
            style={{backgroundColor: colors.voidBlack, color: colors.whiteSmoke, paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8, marginBottom: 16, fontSize: 16}}
            className="bg-voidBlack text-whiteSmoke py-3 px-4 rounded-lg mb-4 text-base"
            keyboardType='email-address'
            autoCapitalize='none'
        />
        <TextInput 
            placeholder="Password"
            placeholderTextColor={colors.satelliteGray}
            style={{backgroundColor: colors.voidBlack, color: colors.whiteSmoke, paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8, marginBottom: 16, fontSize: 16}}
            className="bg-voidBlack text-whiteSmoke py-3 px-4 rounded-lg mb-4 text-base"
            secureTextEntry
        

        />       

       
        <Text className="text-cosmicBlue text-lg font-semibold" style={{color: colors.cosmicBlue, fontSize: 18, fontWeight: "500", textAlign: 'center'}}>
            Didn't have account? <Text style={{fontWeight: "700"}} >sign in</Text>
        </Text>


       
        




     </View>
    <View
        style={{width: '100%', alignItems: 'center', bottom: 70, position: "absolute"}}
    >
      <Pressable 
            onPress={() => {setAni({...ani, loading: true, loading2: true}); setTimeout(() => {
                    setAni({...ani, loadLUVerify: true});
                    

                }, 2000);
                setTimeout(() => {
                    setAni({...ani, loading2: false, loadVerify: false, loadLUVerify: true});
                }, 4000);
                setTimeout(() => {
                    setAni({...ani, loading2: false, loadVerify: true, loadLUVerify: true});
                    toggle();   
                    sendEmail();
              
                }, 5000);
            }} 
            className="bg-gradient-to-r from-cosmicBlue to-nebulaPurple py-3 rounded-xl mt-8"
            style={{backgroundColor: colors.cosmicBlue, paddingVertical: 12, borderRadius: 12, alignItems: 'center', justifyContent: 'center', width: '75%'}}

        >
            {!ani.loading &&
            <Text className="text-whiteSmoke text-center text-lg font-semibold mt-8" style={{color: colors.whiteSmoke, fontSize: 18, fontWeight: "600", textAlign: 'center'}}>
                check_
            </Text>
            }
            {ani.loading && 
            <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
                <Text className="text-whiteSmoke text-center text-lg font-semibold mr-4" style={{color: colors.whiteSmoke, fontSize: 18, fontWeight: "600", textAlign: 'center', marginLeft: 15}}>
                checking...
                </Text>
                <LoadingAnimation />

            </View>
            }

        </Pressable>

        <Text className="text-satelliteGray text-xs mt-4 mb-8" style={{color: colors.satelliteGray, fontSize: 12, marginTop: 16, marginBottom: 32, textAlign: 'center', width: '75%'}}>
            By creating an account, you agree to our Terms of Service and Privacy Policy.
        </Text>

    </View>


    <View style={{position: "absolute", bottom: 0, alignItems: "center",
        backgroundColor: colors.starlightGray, paddingHorizontal: 12, paddingVertical: 20, borderRadius: 12,
        width: "100%",
        height: 500,
        opacity: ani.loadLUVerify ? 1 : 0,
        transitionDuration: '500ms',
        transitionProperty: 'opacity',
        transitionTimingFunction: 'ease-in-out',
    }}>
        <Text style={{color: colors.whiteSmoke, fontSize: 16, fontWeight: "600", marginBottom: 0}}>
            Setting up your account...
        </Text>
        <View style={{top: ani.loadVerify ? 200 : 270, alignItems: 'center', position: "absolute"}}>
           {!ani.loading2 &&
            <AniText 
            text="Let's verify your email!"
            speed={70}
            style={{fontSize: 16, color: colors.satelliteGray, textAlign: 'center'}}
           />}
            {ani.loading2 && <LoadingAnimation />}
        </View>

        <Animated.View style={{position: "absolute", top: 300, alignItems: 'center',
            opacity: !ani.loadVerify ? 0 : 1,
            transitionDuration: '5000ms',
            transitionProperty: 'opacity',
            transitionTimingFunction: "ease-in-out",
            width: widthAnim,

            justifyContent: 'center',
            

        }}>
            {/* verfiy email */}
                <TextInput
                    placeholder=''
                    placeholderTextColor={colors.satelliteGray}
                    style={{letterSpacing: 30, alignItems: "center", color: colors.whiteSmoke, paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8, marginBottom: 16, fontSize: 16, width: '75%', textAlign: 'center'}}
                    className="bg-voidBlack text-whiteSmoke py-3 px-4 rounded-lg mb-4 text-base"
                    keyboardType='number-pad'
                    maxLength={5}
                    value={validTextInput}
                    onChangeText={(text) => setVaildTextInput(text)}
                />
                <Animated.View 
                    style={[{
                            height: 1,
                            borderRadius: 2, 
                            width: '75%',
                            marginBottom: 30,
                        },
                        { backgroundColor: borderColorInterpolation },
                    ]}
                ></Animated.View>
                <Pressable 
                    onPress={() => {
                        // Verify email action
                        if (validTextInput === validText)
                            setIsValid(true);
                    }}
                    className="bg-gradient-to-r from-cosmicBlue to-nebulaPurple py-3 rounded-xl mt-2"
                    style={{backgroundColor: colors.cosmicBlue, paddingVertical: 12, borderRadius: 12, alignItems: 'center', justifyContent: 'center', width: '75%'}}
                >
                    <Text className="text-whiteSmoke text-center text-lg font-semibold mt-2" style={{color: colors.whiteSmoke, fontSize: 18, fontWeight: "600", textAlign: 'center'}}>
                        Verify Email
                    </Text>
                </Pressable>
        </Animated.View>
        <Text style={{color: colors.satelliteGray, fontSize: 14, textAlign: 'center', marginTop: 15, paddingHorizontal: 24}}>
            This may take a few moments. Please do not close the app.
        </Text>
        
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15, paddingHorizontal: 24}}>
            <Ionicons name="alert-circle" size={24} color={colors.whiteSmoke} />
            <Text style={{color: colors.satelliteGray, fontSize: 14, textAlign: 'center', marginTop: 15, paddingHorizontal: 24}}>
                your data is safe with us. We respect your privacy and are committed to protecting your personal information and ensuring a secure experience.
            </Text>
        </View>

    </View>
    </View>
  )
}