import React from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts/lib/chart/sunburst';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

const SunburstBookChart = () => {
	const colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
	const bgColor = '#2E2733';
	const itemStyle = {
		star5: {
			color: colors[0],
		},
		star4: {
			color: colors[1],
		},
		star3: {
			color: colors[2],
		},
		star2: {
			color: colors[3],
		},
	};

	// const data = [
	// 	{
	// 		name: '虚构',
	// 		itemStyle: {
	// 			color: colors[1],
	// 		},
	// 		children: [
	// 			{
	// 				name: '小说',
	// 				children: [
	// 					{
	// 						name: '5☆',
	// 						children: [
	// 							{
	// 								name: '疼',
	// 							},
	// 							{
	// 								name: '慈悲',
	// 							},
	// 							{
	// 								name: '楼下的房客',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '4☆',
	// 						children: [
	// 							{
	// 								name: '虚无的十字架',
	// 							},
	// 							{
	// 								name: '无声告白',
	// 							},
	// 							{
	// 								name: '童年的终结',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '3☆',
	// 						children: [
	// 							{
	// 								name: '疯癫老人日记',
	// 							},
	// 						],
	// 					},
	// 				],
	// 			},
	// 			{
	// 				name: '其他',
	// 				children: [
	// 					{
	// 						name: '5☆',
	// 						children: [
	// 							{
	// 								name: '纳博科夫短篇小说全集',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '4☆',
	// 						children: [
	// 							{
	// 								name: '安魂曲',
	// 							},
	// 							{
	// 								name: '人生拼图版',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '3☆',
	// 						children: [
	// 							{
	// 								name: '比起爱你，我更需要你',
	// 							},
	// 						],
	// 					},
	// 				],
	// 			},
	// 		],
	// 	},
	// 	{
	// 		name: '非虚构',
	// 		itemStyle: {
	// 			color: colors[2],
	// 		},
	// 		children: [
	// 			{
	// 				name: '设计',
	// 				children: [
	// 					{
	// 						name: '5☆',
	// 						children: [
	// 							{
	// 								name: '无界面交互',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '4☆',
	// 						children: [
	// 							{
	// 								name: '数字绘图的光照与渲染技术',
	// 							},
	// 							{
	// 								name: '日本建筑解剖书',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '3☆',
	// 						children: [
	// 							{
	// 								name: '奇幻世界艺术\n&RPG地图绘制讲座',
	// 							},
	// 						],
	// 					},
	// 				],
	// 			},
	// 			{
	// 				name: '社科',
	// 				children: [
	// 					{
	// 						name: '5☆',
	// 						children: [
	// 							{
	// 								name: '痛点',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '4☆',
	// 						children: [
	// 							{
	// 								name: '卓有成效的管理者',
	// 							},
	// 							{
	// 								name: '进化',
	// 							},
	// 							{
	// 								name: '后物欲时代的来临',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '3☆',
	// 						children: [
	// 							{
	// 								name: '疯癫与文明',
	// 							},
	// 						],
	// 					},
	// 				],
	// 			},
	// 			{
	// 				name: '心理',
	// 				children: [
	// 					{
	// 						name: '5☆',
	// 						children: [
	// 							{
	// 								name: '我们时代的神经症人格',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '4☆',
	// 						children: [
	// 							{
	// 								name: '皮格马利翁效应',
	// 							},
	// 							{
	// 								name: '受伤的人',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '3☆',
	// 					},
	// 					{
	// 						name: '2☆',
	// 						children: [
	// 							{
	// 								name: '迷恋',
	// 							},
	// 						],
	// 					},
	// 				],
	// 			},
	// 			{
	// 				name: '居家',
	// 				children: [
	// 					{
	// 						name: '4☆',
	// 						children: [
	// 							{
	// 								name: '把房子住成家',
	// 							},
	// 							{
	// 								name: '只过必要生活',
	// 							},
	// 							{
	// 								name: '北欧简约风格',
	// 							},
	// 						],
	// 					},
	// 				],
	// 			},
	// 			{
	// 				name: '绘本',
	// 				children: [
	// 					{
	// 						name: '5☆',
	// 						children: [
	// 							{
	// 								name: '设计诗',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '4☆',
	// 						children: [
	// 							{
	// 								name: '假如生活糊弄了你',
	// 							},
	// 							{
	// 								name: '博物学家的神秘动物图鉴',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '3☆',
	// 						children: [
	// 							{
	// 								name: '方向',
	// 							},
	// 						],
	// 					},
	// 				],
	// 			},
	// 			{
	// 				name: '哲学',
	// 				children: [
	// 					{
	// 						name: '4☆',
	// 						children: [
	// 							{
	// 								name: '人生的智慧',
	// 							},
	// 						],
	// 					},
	// 				],
	// 			},
	// 			{
	// 				name: '技术',
	// 				children: [
	// 					{
	// 						name: '5☆',
	// 						children: [
	// 							{
	// 								name: '代码整洁之道',
	// 							},
	// 						],
	// 					},
	// 					{
	// 						name: '4☆',
	// 						children: [
	// 							{
	// 								name: 'Three.js 开发指南',
	// 							},
	// 						],
	// 					},
	// 				],
	// 			},
	// 		],
	// 	},
	// ];

	const data = [
		{
			name: 'HEALTHIER LIVING',
      value: 33,
			itemStyle: {
				color: '#071952',
			},
			children: [
				{
					name: 'IRRESISTIBILE VEGETABLES',
          value: 11,
					itemStyle: {
						color: '#0B666A',
					},
					children: [
						{
							name: 'Fortification & Functional Nutrition',
							value: 11,
							itemStyle: {
								color: '#35A29F',
							},
						}
					],
				},
				{
					name: 'FEEL GOOD FOOD',
          value: 11,
					itemStyle: {
						color: '#0B666A',
					},
					children: [
						{
							name: 'Plant-based Eating',
							value: 11,
							itemStyle: {
								color: '#35A29F',
							},
						},
					],
				},
				{
					name: 'MINDFUL PROTEINS',
          value: 11,
					itemStyle: {
						color: '#0B666A',
					},
					children: [
						{
							name: 'Mood Boost',
							value: 5.5,
							itemStyle: {
								color: '#35A29F',
							},
						},
						{
							name: 'Clean Label/No Nasties',
							value: 5.5,
							itemStyle: {
								color: '#35A29F',
							},
						},
					],
				},
			],
		},

		{
			name: 'Smart Spending',
      value: 19,
			itemStyle: {
				color: '#884A39',
			},
			children: [
				{
					name: 'Low waste Menus',
          value: 19,
					itemStyle: {
						color: '#C38154',
					},
					children: [
						{
							name: 'Affordable Meals at Home',
							value: 9.5,
							itemStyle: {
								color: '#FFC26F',
							},
						},
						{
							name: 'More Value Bulk Purchase',
							value: 9.5,
							itemStyle: {
								color: '#FFC26F',
							},
						},
					],
				},
			],
		},

		{
			name: 'INDULGING EXPERIENCES',
      value: 16,
			itemStyle: {
				color: '#461959',
			},
			children: [
				{
					name: 'Wild & Pure',
          value: 8,
					itemStyle: {
						color: '#7A316F',
					},
					children: [
						{
							name: 'Classic Vintage',
							value: 4,
							itemStyle: {
								color: '#CD6688',
							},
						},
						{
							name: 'Ethnic Cuisine',
							value: 4,
							itemStyle: {
								color: '#CD6688',
							},
						},
					],
				},

				{
					name: 'Flavor Contrasts',
          value: 8,
					itemStyle: {
						color: '#7A316F',
					},
					children: [
						{
							name: 'Gourmet Twist & Fusion',
							value: 8,
							itemStyle: {
								color: '#CD6688',
							},
						},
					],
				},
			],
		},

		{
			name: 'SMART SOLUTIONS',
      value: 11,
			itemStyle: {
				color: '#FF6D60',
			},
			children: [
				{
					name: 'kkk',
          value: 11,
					itemStyle: {
						color: '#F7D060',
					},
					children: [
						{
							name: 'Easy & Convenient Fast Cooking',
							value: 5.5,
							itemStyle: {
								color: '#F3E99F',
							},
						},
						{
							name: 'Smart Cooking',
							value: 5.5,
							itemStyle: {
								color: '#F3E99F',
							},
						},
					],
				},
			],
		},

		{
			name: 'COOKING RENAISSANCE',
      value: 11,
			itemStyle: {
				color: '#4A55A2',
			},
			children: [
				{
					name: 'Modernized comfort food. Joyful sharing',
          value: 11,
					itemStyle: {
						color: '#7895CB',
					},
					children: [
						{
							name: 'For the Table',
							value: 5.5,
							itemStyle: {
								color: '#A0BFE0',
							},
						},
						{
							name: 'Restaurant at Home',
							value: 5.5,
							itemStyle: {
								color: '#A0BFE0',
							},
						},
					],
				},
			],
		},

    {
			name: 'ANYTIME ANYWHERE',
      value: 7,
			itemStyle: {
				color: '#FFEA20',
			},
			children: [
				{
					name: 'RTE & Snacking',
          value: 7,
					itemStyle: {
						color: '#8DCBE6',
					},
					children: [
						{
							name: 'Quick Commerce',
							value: 7,
							itemStyle: {
								color: '#9DF1DF',
							},
						}
					],
				},
			],
		},

		{
			name: 'CONSCIOUS CHOICES',
      value: 2,
			itemStyle: {
				color: '#B04759',
			},
			children: [
				{
					name: 'ggg',
          value: 2,
					itemStyle: {
						color: '#E76161',
					},
					children: [
						{
							name: 'Transparent & Traceable & Locally Sourced',
							value: 0.6,
							itemStyle: {
								color: '#F99B7D',
							},
						},
						{
							name: 'Reg. Agriculture',
							value: 0.6,
							itemStyle: {
								color: '#F99B7D',
							},
						},
						{
							name: 'Re-inventing Waste Streams',
							value: 0.6,
							itemStyle: {
								color: '#F99B7D',
							},
						},
					],
				},
			],
		},

		{
			name: 'DIASPORAS',
      value: 1,
			itemStyle: {
				color: '#99A98F',
			},
			children: [
				{
					name: 'zzz',
          value: 1,
					itemStyle: {
						color: '#C1D0B5',
					},
					children: [
						{
							name: 'zzz',
							value: 1,
							itemStyle: {
								color: '#D6E8DB',
							},
						}
					],
				},
			],
		},
	];

	for (let j = 0; j < data.length; ++j) {
		let level1 = data[j].children;
		for (let i = 0; i < level1.length; ++i) {
			let block = level1[i].children;
			let bookScore = [];
			let bookScoreId;
			for (let star = 0; star < block.length; ++star) {
				let style = (function (name) {
					switch (name) {
						case '5☆':
							bookScoreId = 0;
							return itemStyle.star5;
						case '4☆':
							bookScoreId = 1;
							return itemStyle.star4;
						case '3☆':
							bookScoreId = 2;
							return itemStyle.star3;
						case '2☆':
							bookScoreId = 3;
							return itemStyle.star2;
						default:
							return {};
					}
				})(block[star].name);
				block[star].label = {
					color: style.color,
					downplay: {
						opacity: 0.5,
					},
				};
				if (block[star].children) {
					style = {
						opacity: 1,
						color: style.color,
					};
					block[star].children.forEach(function (book) {
						book.value = 1;
						book.itemStyle = style;
						book.label = {
							color: style.color,
						};
						let value = 1;
						if (bookScoreId === 0 || bookScoreId === 3) {
							value = 5;
						}
						if (bookScore[bookScoreId]) {
							bookScore[bookScoreId].value += value;
						} else {
							bookScore[bookScoreId] = {
								color: colors[bookScoreId],
								value: value,
							};
						}
					});
				}
			}
			level1[i].itemStyle = {
				color: data[j].itemStyle.color,
			};
		}
	}

	const chartOptions = {
		backgroundColor: bgColor,
		color: colors,
		series: [
			{
				type: 'sunburst',
				center: ['50%', '48%'],
				data: data,
				sort: function (a, b) {
					if (a.depth === 1) {
						return b.getValue() - a.getValue();
					} else {
						return a.dataIndex - b.dataIndex;
					}
				},
				label: {
					rotate: 'radial',
					color: bgColor,
				},
				itemStyle: {
					borderColor: bgColor,
					borderWidth: 2,
				},
				levels: [
					{},
					{
						r0: 0,
						r: 40,
						label: {
							rotate: 0,
						},
					},
					{
						r0: 40,
						r: 105,
					},
					{
						r0: 115,
						r: 140,
						itemStyle: {
							shadowBlur: 2,
							shadowColor: colors[2],
							color: 'transparent',
						},
						label: {
							rotate: 'tangential',
							fontSize: 10,
							color: colors[0],
						},
					},
					{
						r0: 140,
						r: 145,
						itemStyle: {
							shadowBlur: 80,
							shadowColor: colors[0],
						},
						label: {
							position: 'outside',
							textShadowBlur: 5,
							textShadowColor: '#333',
						},
						downplay: {
							label: {
								opacity: 0.5,
							},
						},
					},
				],
			},
		],
	};

	return (
		<div>
			<ReactECharts option={chartOptions} style={{ height: '500px' }} />
		</div>
	);
};

export default SunburstBookChart;
