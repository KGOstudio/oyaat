import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
export const colors = {
  // 🌌 Brand & Theme
  cosmicBlue: '#3B82F6',       // Primary
  nebulaPurple: '#8B5CF6',     // Secondary
  auroraMint: '#22D3A7',       // Success / Delivered
  solarYellow: '#FACC15',      // Warning / Pending
  novaRed: '#F43F5E',          // Error / Failed

  // 🪐 Backgrounds & Surfaces
  deepSpace: '#0B0F19',        // Main background
  starlightGray: '#1E293B',    // Card / Surface background

  // ✨ Text
  whiteSmoke: '#F9FAFB',       // Primary text
  satelliteGray: '#9CA3AF',    // Secondary text

  // 🌠 Optional
  voidBlack: '#030712',        // Extra dark sections or overlays

  // 🌈 Gradients (for easy use in components)
  gradients: {
    primary: ['#3B82F6', '#8B5CF6'],   // Cosmic Blue → Nebula Purple
    success: ['#22D3A7', '#3B82F6'],   // Aurora Mint → Cosmic Blue
    warning: ['#FACC15', '#8B5CF6'],   // Solar Yellow → Nebula Purple
    error: ['#F43F5E', '#8B5CF6'],     // Nova Red → Nebula Purple
  },
};

export default function index() {



  const navigation = useNavigation();
  const router = useRouter();

  return (
       <View 
       style={{backgroundColor: colors.deepSpace, flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 48}}
       className="flex-1 bg-deepSpace justify-between items-center px-6 py-12">
      {/* Top Logo */}
      <View className="items-center mt-10" style={{alignItems: 'center', marginTop: 40}}>
        <Text style={{fontSize: 30, fontWeight: "bold", color: colors.whiteSmoke, }} className="text-4xl font-bold text-whiteSmoke tracking-wide">Weko</Text>
        <Text style={{color: colors.satelliteGray, marginTop: 5}} className="text-satelliteGray mt-2">Your Universe of Buying & Selling</Text>
      </View>

      {/* Illustration */}
      <View className="items-center mt-10" style={{alignItems: 'center', marginTop: 40}}>
        <Image
          source={{
            uri: "https://weko-storge.s3.eu-north-1.amazonaws.com/uploads/15309756-unscreen.gif",
          }}
          className="w-56 h-56 mb-6"
            style={{ width: 224, height: 224, marginBottom: 24 , shadowColor: "white", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 50, borderRadius: 112, }}
        />
        <Text  className="text-whiteSmoke text-xl font-semibold text-center mb-2" style={{fontSize: 20, fontWeight: "600", color: colors.whiteSmoke, marginBottom: 8}}>
          Explore, Sell, and Deliver — all in one app
        </Text>
        <Text className="text-satelliteGray text-center px-4" style={{color: colors.satelliteGray, textAlign: 'center', paddingHorizontal: 16}}>
          Weko helps you find great deals, connect with sellers, and even arrange deliveries — all from your pocket.
        </Text>
      </View>

      {/* Buttons */}
      <View className="w-full mt-12 space-y-4" style={{width: '100%', marginTop: 48, rowGap: 16}}>
        <Pressable
          onPress={() => navigation.navigate("rlfp")}
          className="bg-gradient-to-r from-cosmicBlue to-nebulaPurple py-3 rounded-xl"
            style={{backgroundColor: colors.cosmicBlue, paddingVertical: 12, borderRadius: 12, alignItems: 'center', justifyContent: 'center', 

            }}
        >
          <Text className="text-whiteSmoke text-center text-lg font-semibold" style={{color: colors.whiteSmoke, fontSize: 18, fontWeight: "600"}}>
            Get Started
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("accountlfp")}
          className="border border-cosmicBlue py-3 rounded-xl"
          style={{borderColor: colors.cosmicBlue, borderWidth: 1, paddingVertical: 12, borderRadius: 12, alignItems: 'center', justifyContent: 'center'}}
        >
          <Text className="text-cosmicBlue text-center text-lg font-semibold" style={{color: colors.cosmicBlue, fontSize: 18, fontWeight: "600"}}> 
            I already have an account
          </Text>
        </Pressable>
      </View>

      {/* Footer */}
      <Text className="text-satelliteGray text-xs mt-8" style={{color: colors.satelliteGray, fontSize: 12, marginTop: 32}}>
        © 2025 Weko Technologies
      </Text>
    </View>
  )
}