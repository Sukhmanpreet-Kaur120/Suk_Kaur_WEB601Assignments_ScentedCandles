import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
  export class ContentListComponent implements OnInit{
    ngOnInit() {
    }
    contentList :Content[]= [
    {
       id: 1,
       title: 'Calm Lavender',
       description: 'A very calm fragrance of Lavender.',
       imgUrl: 'https://th.bing.com/th/id/OIP.jBLz1MSNf6emYleC5jYO-wHaF7?w=234&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        type: 'Candle',
       creator: 'JewelScents'
   },

  {
    id: 2,
    title: 'Dried Lavender and Oak',
    description: 'Dried lavender bundles mingle with spices and the woodsy scent of an outdoor farmers market.',
    imgUrl: 'https://www.pcfallon.com/images/product/medium/34932.jpg',
    type: 'Candle',
    creator: 'Yankee Candle'
  },

  {
    id: 3,
    title: 'Sweet Vanila Cinnamon',
    description: 'There is nothing quite like the aroma of fresh baked goods, especially when there cinnamon and vanilla involved.',
    imgUrl: 'https://www.mydomaine.com/thmb/RqVsJzPLjftntPrf2-w6YDkhXjg=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Illume-Boulangerie-Sweet-Vanilla-Cinnamon-Jar-Candle-973e05b4cb7a49da8f52041b145c4a1c.jpg',
    type: 'Candle',
    creator: 'Boulangerie'
  },

  {
    id: 4,
    title: 'Champagne Toast',
    description: 'Bubbly chanmpage with bright berries different ones and juicy tangerine.',
    imgUrl: 'https://m.media-amazon.com/images/I/61jjQD1f+eL._AC_SX342_SY445_.jpg',
    type: 'Candle',
    creator: 'White Barn'
  },

  {
    id: 5,
    title: 'Hazelnut Coffee',
    description: 'Coffee grounds with hazelnut and dry spices.',
    imgUrl: 'https://i.pinimg.com/originals/fe/16/fa/fe16fa8fd421fbe4dbd7df368999f49d.png',
    type: 'Candle',
    creator: 'Southern Firefly Candles'
  },
  ];

}
