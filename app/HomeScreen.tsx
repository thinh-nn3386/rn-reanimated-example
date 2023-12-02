import React from 'react'
import { FlatList, ListRenderItem, Text, View } from 'react-native'
import { EXAMPLES, EXAMPLE_SCREENS } from './examples'
import { colors } from './theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {
  const navigation = useNavigation() as any
  const renderItem: ListRenderItem<string> = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item)}
      >
        <View style={{
          padding: 16,
          alignItems: 'center',
          borderBottomColor: colors.border,
          borderBottomWidth: 1
        }}>
          <Text>{item}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={EXAMPLES}
        keyExtractor={(name) => name}
        renderItem={renderItem}
      />
    </View>
  )
}

