import React from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts/lib/chart/sunburst';
import 'echarts/lib/component/title';

const CoffeeSunburstChart = () => {
	const bgColor = '#2E2733';

	// const data = [
	//   {
	//     name: 'Flora',
	//     itemStyle: {
	//       color: '#da0d68'
	//     },
	//     children: [
	//       {
	//         name: 'Black Tea',
	//         value: 1,
	//         itemStyle: {
	//           color: '#975e6d'
	//         }
	//       },
	//       {
	//         name: 'Floral',
	//         itemStyle: {
	//           color: '#e0719c'
	//         },
	//         children: [
	//           {
	//             name: 'Chamomile',
	//             value: 1,
	//             itemStyle: {
	//               color: '#f99e1c'
	//             }
	//           },
	//           {
	//             name: 'Rose',
	//             value: 1,
	//             itemStyle: {
	//               color: '#ef5a78'
	//             }
	//           },
	//           {
	//             name: 'Jasmine',
	//             value: 1,
	//             itemStyle: {
	//               color: '#f7f1bd'
	//             }
	//           }
	//         ]
	//       }
	//     ]
	//   },
	//   {
	//     name: 'Fruity',
	//     itemStyle: {
	//       color: '#da1d23'
	//     },
	//     children: [
	//       {
	//         name: 'Berry',
	//         itemStyle: {
	//           color: '#dd4c51'
	//         },
	//         children: [
	//           {
	//             name: 'Blackberry',
	//             value: 1,
	//             itemStyle: {
	//               color: '#3e0317'
	//             }
	//           },
	//           {
	//             name: 'Raspberry',
	//             value: 1,
	//             itemStyle: {
	//               color: '#e62969'
	//             }
	//           },
	//           {
	//             name: 'Blueberry',
	//             value: 1,
	//             itemStyle: {
	//               color: '#6569b0'
	//             }
	//           },
	//           {
	//             name: 'Strawberry',
	//             value: 1,
	//             itemStyle: {
	//               color: '#ef2d36'
	//             }
	//           }
	//         ]
	//       },
	//       {
	//         name: 'Dried Fruit',
	//         itemStyle: {
	//           color: '#c94a44'
	//         },
	//         children: [
	//           {
	//             name: 'Raisin',
	//             value: 1,
	//             itemStyle: {
	//               color: '#b53b54'
	//             }
	//           },
	//           {
	//             name: 'Prune',
	//             value: 1,
	//             itemStyle: {
	//               color: '#a5446f'
	//             }
	//           }
	//         ]
	//       },
	//       {
	//         name: 'Other Fruit',
	//         itemStyle: {
	//           color: '#dd4c51'
	//         },
	//         children: [
	//           {
	//             name: 'Coconut',
	//             value: 1,
	//             itemStyle: {
	//               color: '#f2684b'
	//             }
	//           },
	//           {
	//             name: 'Cherry',
	//             value: 1,
	//             itemStyle: {
	//               color: '#e73451'
	//             }
	//           },
	//           {
	//             name: 'Pomegranate',
	//             value: 1,
	//             itemStyle: {
	//               color: '#e65656'
	//             }
	//           },
	//           {
	//             name: 'Pineapple',
	//             value: 1,
	//             itemStyle: {
	//               color: '#f89a1c'
	//             }
	//           },
	//           {
	//             name: 'Grape',
	//             value: 1,
	//             itemStyle: {
	//               color: '#aeb92c'
	//             }
	//           },
	//           {
	//             name: 'Apple',
	//             value: 1,
	//             itemStyle: {
	//               color: '#4eb849'
	//             }
	//           },
	//           {
	//             name: 'Peach',
	//             value: 1,
	//             itemStyle: {
	//               color: '#f68a5c'
	//             }
	//           },
	//           {
	//             name: 'Pear',
	//             value: 1,
	//             itemStyle: {
	//               color: '#baa635'
	//             }
	//           }
	//         ]
	//       },
	//       {
	//         name: 'Citrus Fruit',
	//         itemStyle: {
	//           color: '#f7a128'
	//         },
	//         children: [
	//           {
	//             name: 'Grapefruit',
	//             value: 1,
	//             itemStyle: {
	//               color: '#f26355'
	//             }
	//           },
	//           {
	//             name: 'Orange',
	//             value: 1,
	//             itemStyle: {
	//               color: '#e2631e'
	//             }
	//           },
	//           {
	//             name: 'Lemon',
	//             value: 1,
	//             itemStyle: {
	//               color: '#fde404'
	//             }
	//           },
	//           {
	//             name: 'Lime',
	//             value: 1,
	//             itemStyle: {
	//               color: '#7eb138'
	//             }
	//           }
	//         ]
	//       }
	//     ]
	//   },
	//   {
	//     name: 'Sour/\nFermented',
	//     itemStyle: {
	//       color: '#ebb40f'
	//     },
	//     children: [
	//       {
	//         name: 'Sour',
	//         itemStyle: {
	//           color: '#e1c315'
	//         },
	//         children: [
	//           {
	//             name: 'Sour Aromatics',
	//             value: 1,
	//             itemStyle: {
	//               color: '#9ea718'
	//             }
	//           },
	//           {
	//             name: 'Acetic Acid',
	//             value: 1,
	//             itemStyle: {
	//               color: '#94a76f'
	//             }
	//           },
	//           {
	//             name: 'Butyric Acid',
	//             value: 1,
	//             itemStyle: {
	//               color: '#d0b24f'
	//             }
	//           },
	//           {
	//             name: 'Isovaleric Acid',
	//             value: 1,
	//             itemStyle: {
	//               color: '#8eb646'
	//             }
	//           },
	//           {
	//             name: 'Citric Acid',
	//             value: 1,
	//             itemStyle: {
	//               color: '#faef07'
	//             }
	//           },
	//           {
	//             name: 'Malic Acid',
	//             value: 1,
	//             itemStyle: {
	//               color: '#c1ba07'
	//             }
	//           }
	//         ]
	//       },
	//       {
	//         name: 'Alcohol/\nFremented',
	//         itemStyle: {
	//           color: '#b09733'
	//         },
	//         children: [
	//           {
	//             name: 'Winey',
	//             value: 1,
	//             itemStyle: {
	//               color: '#8f1c53'
	//             }
	//           },
	//           {
	//             name: 'Whiskey',
	//             value: 1,
	//             itemStyle: {
	//               color: '#b34039'
	//             }
	//           },
	//           {
	//             name: 'Fremented',
	//             value: 1,
	//             itemStyle: {
	//               color: '#ba9232'
	//             }
	//           },
	//           {
	//             name: 'Overripe',
	//             value: 1,
	//             itemStyle: {
	//               color: '#8b6439'
	//             }
	//           }
	//         ]
	//       }
	//     ]
	//   },
	//   {
	//     name: 'Green/\nVegetative',
	//     itemStyle: {
	//       color: '#187a2f'
	//     },
	//     children: [
	//       {
	//         name: 'Olive Oil',
	//         value: 1,
	//         itemStyle: {
	//           color: '#a2b029'
	//         }
	//       },
	//       {
	//         name: 'Raw',
	//         value: 1,
	//         itemStyle: {
	//           color: '#718933'
	//         }
	//       },
	//       {
	//         name: 'Green/\nVegetative',
	//         itemStyle: {
	//           color: '#3aa255'
	//         },
	//         children: [
	//           {
	//             name: 'Under-ripe',
	//             value: 1,
	//             itemStyle: {
	//               color: '#a2bb2b'
	//             }
	//           },
	//           {
	//             name: 'Peapod',
	//             value: 1,
	//             itemStyle: {
	//               color: '#62aa3c'
	//             }
	//           },
	//           {
	//             name: 'Fresh',
	//             value: 1,
	//             itemStyle: {
	//               color: '#03a653'
	//             }
	//           },
	//           {
	//             name: 'Dark Green',
	//             value: 1,
	//             itemStyle: {
	//               color: '#038549'
	//             }
	//           },
	//           {
	//             name: 'Vegetative',
	//             value: 1,
	//             itemStyle: {
	//               color: '#28b44b'
	//             }
	//           },
	//           {
	//             name: 'Hay-like',
	//             value: 1,
	//             itemStyle: {
	//               color: '#a3a830'
	//             }
	//           },
	//           {
	//             name: 'Herb-like',
	//             value: 1,
	//             itemStyle: {
	//               color: '#7ac141'
	//             }
	//           }
	//         ]
	//       },
	//       {
	//         name: 'Beany',
	//         value: 1,
	//         itemStyle: {
	//           color: '#5e9a80'
	//         }
	//       }
	//     ]
	//   },
	//   {
	//     name: 'Other',
	//     itemStyle: {
	//       color: '#0aa3b5'
	//     },
	//     children: [
	//       {
	//         name: 'Papery/Musty',
	//         itemStyle: {
	//           color: '#9db2b7'
	//         },
	//         children: [
	//           {
	//             name: 'Stale',
	//             value: 1,
	//             itemStyle: {
	//               color: '#8b8c90'
	//             }
	//           },
	//           {
	//             name: 'Cardboard',
	//             value: 1,
	//             itemStyle: {
	//               color: '#beb276'
	//             }
	//           },
	//           {
	//             name: 'Papery',
	//             value: 1,
	//             itemStyle: {
	//               color: '#fefef4'
	//             }
	//           },
	//           {
	//             name: 'Woody',
	//             value: 1,
	//             itemStyle: {
	//               color: '#744e03'
	//             }
	//           },
	//           {
	//             name: 'Moldy/Damp',
	//             value: 1,
	//             itemStyle: {
	//               color: '#a3a36f'
	//             }
	//           },
	//           {
	//             name: 'Musty/Dusty',
	//             value: 1,
	//             itemStyle: {
	//               color: '#c9b583'
	//             }
	//           },
	//           {
	//             name: 'Musty/Earthy',
	//             value: 1,
	//             itemStyle: {
	//               color: '#978847'
	//             }
	//           },
	//           {
	//             name: 'Animalic',
	//             value: 1,
	//             itemStyle: {
	//               color: '#9d977f'
	//             }
	//           },
	//           {
	//             name: 'Meaty Brothy',
	//             value: 1,
	//             itemStyle: {
	//               color: '#cc7b6a'
	//             }
	//           },
	//           {
	//             name: 'Phenolic',
	//             value: 1,
	//             itemStyle: {
	//               color: '#db646a'
	//             }
	//           }
	//         ]
	//       },
	//       {
	//         name: 'Chemical',
	//         itemStyle: {
	//           color: '#76c0cb'
	//         },
	//         children: [
	//           {
	//             name: 'Bitter',
	//             value: 1,
	//             itemStyle: {
	//               color: '#80a89d'
	//             }
	//           },
	//           {
	//             name: 'Salty',
	//             value: 1,
	//             itemStyle: {
	//               color: '#def2fd'
	//             }
	//           },
	//           {
	//             name: 'Medicinal',
	//             value: 1,
	//             itemStyle: {
	//               color: '#7a9bae'
	//             }
	//           },
	//           {
	//             name: 'Petroleum',
	//             value: 1,
	//             itemStyle: {
	//               color: '#039fb8'
	//             }
	//           },
	//           {
	//             name: 'Skunky',
	//             value: 1,
	//             itemStyle: {
	//               color: '#5e777b'
	//             }
	//           },
	//           {
	//             name: 'Rubber',
	//             value: 1,
	//             itemStyle: {
	//               color: '#120c0c'
	//             }
	//           }
	//         ]
	//       }
	//     ]
	//   },
	//   {
	//     name: 'Roasted',
	//     itemStyle: {
	//       color: '#c94930'
	//     },
	//     children: [
	//       {
	//         name: 'Pipe Tobacco',
	//         value: 1,
	//         itemStyle: {
	//           color: '#caa465'
	//         }
	//       },
	//       {
	//         name: 'Tobacco',
	//         value: 1,
	//         itemStyle: {
	//           color: '#dfbd7e'
	//         }
	//       },
	//       {
	//         name: 'Burnt',
	//         itemStyle: {
	//           color: '#be8663'
	//         },
	//         children: [
	//           {
	//             name: 'Acrid',
	//             value: 1,
	//             itemStyle: {
	//               color: '#b9a449'
	//             }
	//           },
	//           {
	//             name: 'Ashy',
	//             value: 1,
	//             itemStyle: {
	//               color: '#899893'
	//             }
	//           },
	//           {
	//             name: 'Smoky',
	//             value: 1,
	//             itemStyle: {
	//               color: '#a1743b'
	//             }
	//           },
	//           {
	//             name: 'Brown, Roast',
	//             value: 1,
	//             itemStyle: {
	//               color: '#894810'
	//             }
	//           }
	//         ]
	//       },
	//       {
	//         name: 'Cereal',
	//         itemStyle: {
	//           color: '#ddaf61'
	//         },
	//         children: [
	//           {
	//             name: 'Grain',
	//             value: 1,
	//             itemStyle: {
	//               color: '#b7906f'
	//             }
	//           },
	//           {
	//             name: 'Malt',
	//             value: 1,
	//             itemStyle: {
	//               color: '#eb9d5f'
	//             }
	//           }
	//         ]
	//       }
	//     ]
	//   },
	//   {
	//     name: 'Spices',
	//     itemStyle: {
	//       color: '#ad213e'
	//     },
	//     children: [
	//       {
	//         name: 'Pungent',
	//         value: 1,
	//         itemStyle: {
	//           color: '#794752'
	//         }
	//       },
	//       {
	//         name: 'Pepper',
	//         value: 1,
	//         itemStyle: {
	//           color: '#cc3d41'
	//         }
	//       },
	//       {
	//         name: 'Brown Spice',
	//         itemStyle: {
	//           color: '#b14d57'
	//         },
	//         children: [
	//           {
	//             name: 'Anise',
	//             value: 1,
	//             itemStyle: {
	//               color: '#c78936'
	//             }
	//           },
	//           {
	//             name: 'Nutmeg',
	//             value: 1,
	//             itemStyle: {
	//               color: '#8c292c'
	//             }
	//           },
	//           {
	//             name: 'Cinnamon',
	//             value: 1,
	//             itemStyle: {
	//               color: '#e5762e'
	//             }
	//           },
	//           {
	//             name: 'Clove',
	//             value: 1,
	//             itemStyle: {
	//               color: '#a16c5a'
	//             }
	//           }
	//         ]
	//       }
	//     ]
	//   },
	//   {
	//     name: 'Nutty/\nCocoa',
	//     itemStyle: {
	//       color: '#a87b64'
	//     },
	//     children: [
	//       {
	//         name: 'Nutty',
	//         itemStyle: {
	//           color: '#c78869'
	//         },
	//         children: [
	//           {
	//             name: 'Peanuts',
	//             value: 1,
	//             itemStyle: {
	//               color: '#d4ad12'
	//             }
	//           },
	//           {
	//             name: 'Hazelnut',
	//             value: 1,
	//             itemStyle: {
	//               color: '#9d5433'
	//             }
	//           },
	//           {
	//             name: 'Almond',
	//             value: 1,
	//             itemStyle: {
	//               color: '#c89f83'
	//             }
	//           }
	//         ]
	//       },
	//       {
	//         name: 'Cocoa',
	//         itemStyle: {
	//           color: '#bb764c'
	//         },
	//         children: [
	//           {
	//             name: 'Chocolate',
	//             value: 1,
	//             itemStyle: {
	//               color: '#692a19'
	//             }
	//           },
	//           {
	//             name: 'Dark Chocolate',
	//             value: 1,
	//             itemStyle: {
	//               color: '#470604'
	//             }
	//           }
	//         ]
	//       }
	//     ]
	//   },
	//   {
	//     name: 'Sweet',
	//     itemStyle: {
	//       color: '#e65832'
	//     },
	//     children: [
	//       {
	//         name: 'Brown Sugar',
	//         itemStyle: {
	//           color: '#d45a59'
	//         },
	//         children: [
	//           {
	//             name: 'Molasses',
	//             value: 1,
	//             itemStyle: {
	//               color: '#310d0f'
	//             }
	//           },
	//           {
	//             name: 'Maple Syrup',
	//             value: 1,
	//             itemStyle: {
	//               color: '#ae341f'
	//             }
	//           },
	//           {
	//             name: 'Caramelized',
	//             value: 1,
	//             itemStyle: {
	//               color: '#d78823'
	//             }
	//           },
	//           {
	//             name: 'Honey',
	//             value: 1,
	//             itemStyle: {
	//               color: '#da5c1f'
	//             }
	//           }
	//         ]
	//       },
	//       {
	//         name: 'Vanilla',
	//         value: 1,
	//         itemStyle: {
	//           color: '#f89a80'
	//         }
	//       },
	//       {
	//         name: 'Vanillin',
	//         value: 1,
	//         itemStyle: {
	//           color: '#f37674'
	//         }
	//       },
	//       {
	//         name: 'Overall Sweet',
	//         value: 1,
	//         itemStyle: {
	//           color: '#e75b68'
	//         }
	//       },
	//       {
	//         name: 'Sweet Aromatics',
	//         value: 1,
	//         itemStyle: {
	//           color: '#d0545f'
	//         }
	//       }
	//     ]
	//   }
	// ];
	const handlePieClick = (params) => {
		if (params.data && params.data.name) {
			console.log(`Clicked on: ${params.data.name}`);
		}
	};

  const getTooltipContent = (params) => {
    const name = params.name;
    return name;
  };

	const data = [
		{
			name: '33%',
			value: 33,
			itemStyle: {
				color: '#04763F',
			},
			children: [
				{
					name: 'HEALTHIER LIVING',
					value: 33,
					itemStyle: {
						color: '#04763F',
					},

					children: [
						{
							name: 'IRRESISTIBILE VEGETABLES',
							value: 11,
							itemStyle: {
								color: '#024826',
							},
							children: [
								{
									name: 'Fortification & Functional Nutrition',
									value: 11,
									itemStyle: {
										color: '#047940',
									},
								},
							],
						},
						{
							name: 'FEEL GOOD FOOD',
							value: 11,
							itemStyle: {
								color: '#024826',
							},
							children: [
								{
									name: 'Plant-based Eating',
									value: 11,
									itemStyle: {
										color: '#047940',
									},
								},
							],
						},
						{
							name: 'MINDFUL PROTEINS',
							value: 11,
							itemStyle: {
								color: '#024826',
							},
							children: [
								{
									name: 'Mood Boost',
									value: 5.5,
									itemStyle: {
										color: '#047940',
									},
								},
								{
									name: 'Clean Label/No Nasties',
									value: 5.5,
									itemStyle: {
										color: '#047940',
									},
								},
							],
						},
					],
				},
			],
		},

		{
			name: '19%',
			value: 19,
			itemStyle: {
				color: '#F6DF00',
			},
			children: [
				{
					name: 'Smart Spending',
					value: 19,
					itemStyle: {
						color: '#F6DF00',
					},
					children: [
						{
							name: 'Low waste Menus',
							value: 19,
							itemStyle: {
								color: '#948600',
							},
							children: [
								{
									name: 'Affordable Meals at Home',
									value: 9.5,
									itemStyle: {
										color: '#F6DF00',
									},
								},
								{
									name: 'More Value Bulk Purchase',
									value: 9.5,
									itemStyle: {
										color: '#F6DF00',
									},
								},
							],
						},
					],
				},
			],
		},

		{
			name: '16%',
			value: 16,
			itemStyle: {
				color: '#E38008',
			},
			children: [
				{
					name: 'INDULGING EXPERIENCES',
					value: 16,
					itemStyle: {
						color: '#E38008',
					},
					children: [
						{
							name: 'Wild & Pure',
							value: 8,
							itemStyle: {
								color: '#8B4E05',
							},
							children: [
								{
									name: 'Classic Vintage',
									value: 4,
									itemStyle: {
										color: '#E38008',
									},
								},
								{
									name: 'Ethnic Cuisine',
									value: 4,
									itemStyle: {
										color: '#E38008',
									},
								},
							],
						},

						{
							name: 'Flavor Contrasts',
							value: 8,
							itemStyle: {
								color: '#8B4E05',
							},
							children: [
								{
									name: 'Gourmet Twist & Fusion',
									value: 8,
									itemStyle: {
										color: '#E38008',
									},
								},
							],
						},
					],
				},
			],
		},

		{
			name: '11%',
			value: 11,
			itemStyle: {
				color: '#004771',
			},
			children: [
				{
					name: 'SMART SOLUTIONS',
					value: 11,
					itemStyle: {
						color: '#004771',
					},
					children: [
						{
							name: 'kkk',
							value: 11,
							itemStyle: {
								color: '#002B45',
							},
							children: [
								{
									name: 'Easy & Convenient Fast Cooking',
									value: 5.5,
									itemStyle: {
										color: '#004771',
									},
								},
								{
									name: 'Smart Cooking',
									value: 5.5,
									itemStyle: {
										color: '#004771',
									},
								},
							],
						},
					],
				},
			],
		},

		{
			name: '11%',
			value: 11,
			itemStyle: {
				color: '#006090',
			},
			children: [
				{
					name: 'COOKING RENAISSANCE',
					value: 11,
					itemStyle: {
						color: '#006090',
					},
					children: [
						{
							name: 'Modernized comfort food. Joyful sharing',
							value: 11,
							itemStyle: {
								color: '#003B5A',
							},
							children: [
								{
									name: 'For the Table',
									value: 5.5,
									itemStyle: {
										color: '#006090',
									},
								},
								{
									name: 'Restaurant at Home',
									value: 5.5,
									itemStyle: {
										color: '#006090',
									},
								},
							],
						},
					],
				},
			],
		},

		{
			name: '7%',
			value: 7,
			itemStyle: {
				color: '#F8BC02',
			},
			children: [
				{
					name: 'ANYTIME ANYWHERE',
					value: 7,
					itemStyle: {
						color: '#F8BC02',
					},
					children: [
						{
							name: 'RTE & Snacking',
							value: 7,
							itemStyle: {
								color: '#967100',
							},
							children: [
								{
									name: 'Quick Commerce',
									value: 7,
									itemStyle: {
										color: '#F8BC02',
									},
								},
							],
						},
					],
				},
			],
		},

		{
			name: '2%',
			value: 2,
			itemStyle: {
				color: '#047940',
			},
			children: [
				{
					name: 'CONSCIOUS CHOICES',
					value: 2,
					itemStyle: {
						color: '#047940',
					},
					children: [
						{
							name: 'ggg',
							value: 2,
							itemStyle: {
								color: '#024826',
							},
							children: [
								{
									name: 'Transparent & Traceable & Locally Sourced',
									value: 0.6,
									itemStyle: {
										color: '#047940',
									},
								},
								{
									name: 'Reg. Agriculture',
									value: 0.6,
									itemStyle: {
										color: '#047940',
									},
								},
								{
									name: 'Re-inventing Waste Streams',
									value: 0.6,
									itemStyle: {
										color: '#047940',
									},
								},
							],
						},
					],
				},
			],
		},

		{
			name: '1%',
			value: 1,
			itemStyle: {
				color: '#A6A6A6',
			},
			children: [
				{
					name: 'DIASPORAS',
					value: 1,
					itemStyle: {
						color: '#A6A6A6',
					},
					children: [
						{
							name: 'zzz',
							value: 1,
							itemStyle: {
								color: '#666666',
							},
							children: [
								{
									name: 'zzz',
									value: 1,
									itemStyle: {
										color: '#A6A6A6',
									},
								},
							],
						},
					],
				},
			],
		},
	];

	const modifiedData = data.map(item => {
		const bgColor = item.itemStyle.color || '#fff'; // Default white
		return {
			...item,
			label: {
				color: bgColor, // Set label color based on itemStyle color
				...item.label // Preserve other label properties
			},
			name: item.name.toUpperCase(), // Convert label to uppercase
			children: item.children.map(child => ({
				...child,
				name: child.name.toUpperCase(), // Convert label to uppercase
				children: child.children.map(subChild => ({
					...subChild,
					name: subChild.name.toUpperCase(), // Convert label to uppercase
					// ... handle deeper levels if necessary
				})),
			})),
		};
	});

	const option = {
		backgroundColor: bgColor,
    tooltip: {
      trigger: 'item',
      formatter: getTooltipContent,
    },
		series: {
			type: 'sunburst',
			data: modifiedData,
			radius: [0, '15%'],
			sort: undefined,
			emphasis: {
				focus: 'ancestor',
			},
			levels: [
				{},
				{
					r0: '84%',
					r: '85%',
					label: {
						position: 'outside',
						silent: false,
						fontSize: '20px',
						fontWeight: 'bold',
						textShadowBlur: 15,
						textShadowColor: '#333',
					},
					itemStyle: {
						borderWidth: 1,
						borderColor: '#333',
						color: 'transparent',
					},
				},
				{
					r0: '65%',
					r: '82%',
					label: {
						rotate: 'tangential',
						fontWeight: 'bold',
						color: '#fff',
						overflow: 'break',
						width: '100',
						textShadowColor: '#333',
						textShadowBlur: '6'
					},
					itemStyle: {
						borderWidth: 1,
						borderColor: '#333',
					},
				},
				{
					r0: '45%',
					r: '65%',
					itemStyle: {
						borderWidth: 1,
						borderColor: '#333',
					},
					label: {
						rotate: 'tangential',
						formatter: function (params) {
							const label = params.name;
							const maxLength = 5;
							if (label.length > maxLength) {
								return label.slice(0, maxLength) + '...';
							}
							return label;
						},
					},
				},
				{
					r0: '10%',
					r: '45%',
					itemStyle: {
						borderWidth: 1,
						borderColor: '#333',
					},
					label: {
						rotate: '45',
						formatter: function (params) {
							const label = params.name;
							const maxLength = 3;
							if (label.length > maxLength) {
								return label.slice(0, maxLength) + '...';
							}
							return label;
						},
					},
				},
			],
		},
	};

	return (
		<div>
			<ReactECharts
				option={option}
				style={{ height: '600px' }}
				onEvents={{ click: handlePieClick }}
			/>
		</div>
	);
};

export default CoffeeSunburstChart;
