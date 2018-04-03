'use strict'
//for each row find highest and lowest value
//find the difference between the two values
//put the difference value in a list
//sum up the differences - this is your answer
//

const input = `179	2358	5197	867	163	4418	3135	5049	187	166	4682	5080	5541	172	4294	1397
2637	136	3222	591	2593	1982	4506	195	4396	3741	2373	157	4533	3864	4159	142
1049	1163	1128	193	1008	142	169	168	165	310	1054	104	1100	761	406	173
200	53	222	227	218	51	188	45	98	194	189	42	50	105	46	176
299	2521	216	2080	2068	2681	2376	220	1339	244	605	1598	2161	822	387	268
1043	1409	637	1560	970	69	832	87	78	1391	1558	75	1643	655	1398	1193
90	649	858	2496	1555	2618	2302	119	2675	131	1816	2356	2480	603	65	128
2461	5099	168	4468	5371	2076	223	1178	194	5639	890	5575	1258	5591	6125	226
204	205	2797	2452	2568	2777	1542	1586	241	836	3202	2495	197	2960	240	2880
560	96	336	627	546	241	191	94	368	528	298	78	76	123	240	563
818	973	1422	244	1263	200	1220	208	1143	627	609	274	130	961	685	1318
1680	1174	1803	169	450	134	3799	161	2101	3675	133	4117	3574	4328	3630	4186
1870	3494	837	115	1864	3626	24	116	2548	1225	3545	676	128	1869	3161	109
890	53	778	68	65	784	261	682	563	781	360	382	790	313	785	71
125	454	110	103	615	141	562	199	340	80	500	473	221	573	108	536
1311	64	77	1328	1344	1248	1522	51	978	1535	1142	390	81	409	68	352`.split('\n').map(l => l.split('\t').map(Number))
 // const differences =[]

 // for (let i = 0; i < input.length; i++) {
 //   const row = input[i]
 //  console.log(row)
 //   let max = row[0]
 //   let min = row[0]
 //   for (let j = 1; j < row.length; j++) {
 //     if(row[j] > max) {
 //       max = row[j]
 //     }
    
 //     if(row[j] < min) {
 //       min = row[j]
 //     }
 //   }

 //   differences.push(max - min)
 // }

 // let sum = 0
 // for (let i = 0; i < differences.length; i++){
 //   sum = sum + differences[i]
 // }
 // console.log(sum)

// for each row compare each number to every other number
//    divisor/divdend
// use modulo to find the numbers that have remainder of 0
// break out of the loop
// divide the numbers there and result >> array
// sum up the numbers in the array - this is your answer

const quotients = []

for (let i = 0; i < input.length; i++) {
  const row = input[i]
  for (let y = 0; y < row.length; y++){
    for (let x = 0; x < row.length; x++) {
      let first_number = row[y]
      let second_number = row[x]
        if (first_number !== second_number && first_number % second_number === 0) {
          quotients.push(first_number/second_number)
        }
      if (quotients.length === i + 1) {
        break;
      }
    }
  }
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(quotients.reduce(reducer,0));
