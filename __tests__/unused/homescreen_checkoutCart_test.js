// // __tests__/CheckboxWithLabel-test.js

// import React from 'react';
// import HomeScreen from '../src/HomeScreen';
// import Adapter from 'enzyme-adapter-react-15';
// // import { configure } from 'enzyme';
// import { configure, shallow, mount, render } from 'enzyme';

// configure({ adapter: new Adapter() });
// it('HomeScreen checkout cart', () => {
// 	// this.state = {
//  //      cart: {
//  //        1: 0,
//  //        2: 0,
//  //      },
//  //      items: [
//  //        {
//  //          key: 1,
//  //          title: 'Cups',
//  //          imageUrl: require('./img/cupstxt1.png'),
//  //          defaultQuantity: 10,
//  //          pricePerDefaultQuantity: 2.99,
//  //        },
//  //        {
//  //          key: 2,
//  //          title: 'Balls',
//  //          imageUrl: require('./img/ballstxt1.png'),
//  //          defaultQuantity: 2,
//  //          pricePerDefaultQuantity: 2.99,
//  //        },
//  //      ]
//  //    }
//     const datas = [
//         {
//           key: 1,
//           title: 'Cups',
//           imageUrl: require('./img/cupstxt1.png'),
//           defaultQuantity: 10,
//           pricePerDefaultQuantity: 2.99,
//         },
//         {
//           key: 2,
//           title: 'Balls',
//           imageUrl: require('./img/ballstxt1.png'),
//           defaultQuantity: 2,
//           pricePerDefaultQuantity: 2.99,
//         },
//       ]
// 	const HomeScreen = shallow(<HomeScreen data={datas} />); 
// 	    expect(HomeScreen.find('.icon-star')).to.have.length(1);

//    // expect(tree).toMatchSnapshot();
// });
// // test('HomeScreen checkout cart', () => {
// //   // Render a checkbox with label in the document

// //   const HomeScreen = shallow(
// //     <HomeScreen />
// //   );

// //   // HomeScreen.find('Button').simulate('press');

// //   // expect(HomeScreen.text()).toEqual('On');
// // });