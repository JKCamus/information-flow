<template>
  <div id="home" path="/home">
    <scroll class="content" ref="scroll">
      <list :showMessage="message"></list>
      <!-- <div>{{message[0].img}}</div> -->
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
        <li>33</li>
        <li>34</li>
        <li>35</li>
        <li>36</li>
        <li>37</li>
        <li>38</li>
        <li>39</li>
        <li>40</li>
        <li>41</li>
        <li>42</li>
        <li>43</li>
        <li>44</li>
        <li>45</li>
        <li>46</li>
        <li>47</li>
        <li>48</li>
        <li>49</li>
        <li>50</li>
      </ul>
      <!-- <img :src="message[0].img" alt="图1"> -->
    </scroll>
  </div>
</template>
<script>
  import List from 'views/childComps/List'
  import Scroll from 'components/common/scroll/Scroll.vue'

  export default {
    name: 'home',
    components: {
      List,
      Scroll
    },
    data() {
      return {
        // 此处为数据，因为没有接口，当前用的是静态数据，
        message: [{
          id: '001',
          img: require('assets/img/001.jpg'),
          title: '虎跳峡',
          desc: '中虎跳，有幸目睹中虎跳之澎湃汹涌，两岸危崖壁立，在30来米宽的江面中，还屹立着四五米高的虎跳石。江水从两边倾泻而下，犹如猛虎下山，风驰电掣，水花进射，山谷轰鸣。'
        }, {
          id: '002',
          img: require('assets/img/002.jpg'),
          title: '2019年长沙雪',
          desc: '长沙一场大雪，给南方人带来了无尽的欢乐。'
        }, {
          id: '003',
          img: require('assets/img/003.jpg'),
          title: '张家界',
          desc: '一石峰从深不可测的沟谷中冲天而立，上下一般粗细，有如镇山之卫士。'
        }]
      }
    },
  }
</script>
<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .content {
    overflow: hidden;
    position: absolute;
    /* height: 400px; */
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>