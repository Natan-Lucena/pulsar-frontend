import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const PURPLE_DARK = '#4F1D7B';
const WHITE = '#FFFFFF';

interface dashboardGeneralProps {
  name: string;
}

export function DashboardGeneral({ name }: dashboardGeneralProps) {
  const data = {
    labels: ['Recebidas', 'Lidas', 'Respondidas', 'Indisponiveis'],
    datasets: [
      {
        data: [8, 40, 3, 2],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: WHITE,
    backgroundGradientTo: WHITE,
    decimalPlaces: 0,
    fillShadowGradient: PURPLE_DARK,
    fillShadowGradientOpacity: 1,
    color: () => PURPLE_DARK,
    labelColor: () => PURPLE_DARK,
    barPercentage: 1,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <View style={styles.chartContainer1}>
        <BarChart
          data={data}
          width={width * 0.9}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          fromZero
          yAxisLabel=""
          yAxisSuffix=""
          showValuesOnTopOfBars
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    color: PURPLE_DARK,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  chartContainer1: {
    marginVertical: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  chartContainer2: {
    marginVertical: 10,
    marginTop: 100,
    alignItems: 'center',
  },
});
