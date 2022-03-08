import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IStatsPokemon } from '../../interfaces/PokemonInterfaces'
import { getBarStyles } from '../../utils/getBarStyles'

export default function Stats({ stats } : IStatsPokemon) {
  return (
    <>
      {stats && (
        <View style={styles.content}>
          <Text style={styles.title}>Base Stats</Text>
          {stats.map((stat, index) => (
            <View key={index} style={styles.block}>
              <View style={styles.blockTitle}>
                <Text style={styles.blockText}>
                  {stat.stat.name}
                </Text>
              </View>
              <View style={styles.blockStats}>
                <Text style={styles.number}>{stat.base_stat}</Text>
                <View style={styles.bgBar}>
                  <View style={[styles.bar, getBarStyles(stat.base_stat)]}/>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 25,
    marginTop: 30,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    paddingBottom: 5,
    textTransform: "capitalize"
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5
  },
  blockTitle: {
    width: "30%",
    marginRight: 8
  },
  blockText: {
    fontSize: 13,
    textTransform: "capitalize",
    color: "#302e2e"
  },
  blockStats: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center"
  },
  number: {
    width: "12%",
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "80%",
    height: 5,
    borderRadius: 20,
    overflow: 'hidden'
  },
  bar: {
    height: 5,
    borderRadius: 20,
  }
})