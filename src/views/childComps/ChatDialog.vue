<template>
    <div class="container">
        <div class="chatdialog-box" v-for="(item, index) of dialogData" :key="index">
            <div class="dialog-other" v-show="item.type === 1">
                <div class="other-time">
                    {{item.time}}
                </div>
                <div class="other-content">
                    <div class="other-content-avatar">
                        <img :src="profile1" alt="profile">
                    </div>
                    <div class="other-content-text">
                        <span>{{item.text}}</span>
                    </div>
                </div>
            </div>
            <div class="dialog-me" v-show="item.type === 2">
                <div class="me-time">
                    {{item.time}}
                </div>
                <div class="me-content">
                    <div class="me-content-avatar">
                        <img :src="profile2" alt="profile">
                    </div>
                    <div class="me-content-text">
                        <span>{{item.text}}
                            <img :src="item.src" class="common">
                        </span>
                    </div>
                </div>
            </div>
        </div>
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
    </div>
</template>

<script>
    export default {
        name: "ChatDialog",
        props: {
            dialogData: Array
        },
        data() {
            return {
                profile1: require('assets/img/005.jpg'),
                profile2: require('assets/img/004.jpg')
            }
        },
        methods: {

        },
    }
</script>

<style scoped>

    .dialog-other {
        display: flex;
        flex-direction: column;
    }

    .other-time {
        margin: 5px auto;
        background: rgba(199, 199, 199, 0.5);
        color: #FFFFFF;
        border-radius: 2px;
        font-size: 4px;
        padding: 3px;
    }

    .other-content {
        display: flex;
        flex-direction: row;
    }

    .other-content-avatar {
        margin-left: 10px;
        width: 35px;
        height: 35px;
    }

    .other-content-avatar img {
        width: 100%;
        height: 100%;
        border-radius: 5%;
    }

    .other-content-text {
        position: relative;
        margin-top: 5px;
        margin-left: 15px;
        border-radius: 2px;
        min-width: 20px;
        max-width: 220px;
        height: 100%;
        min-height: 30px;
        background-color: rgb(96, 166, 223);
        color: #FFFFFF;
        font-size: 14px;
        line-height: 20px;
        word-break: break-all;
    }

    .other-content-text span {
        display: inline-block;
        margin: 5px;
    }

    .other-content-text:before {
        position: absolute;
        left: -24px;
        top: 4px;
        content: '';
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 12px solid transparent;
        border-right: 12px solid rgb(96, 166, 223);
    }

    /*
    * me style    
    */
    .dialog-me {
        display: flex;
        flex-direction: column;
    }

    .me-time {
        margin: 5px auto;
        background: rgba(199, 199, 199, 0.5);
        color: #FFFFFF;
        border-radius: 2px;
        font-size: 4px;
        padding: 3px;
    }

    .me-content {
        display: flex;
        flex-direction: row-reverse;
    }

    .me-content-avatar {
        margin-right: 10px;
        width: 35px;
        height: 35px;
    }

    .me-content-avatar img {
        width: 100%;
        height: 100%;
        border-radius: 5%;
    }

    .me-content-text {
        display: flex;
        flex-direction: row-reverse;
        position: relative;
        margin-top: 5px;
        margin-right: 15px;
        border-radius: 2px;
        min-width: 20px;
        max-width: 220px;
        height: 100%;
        min-height: 30px;
        background-color: #98e165;
        color: #222;
        font-size: 14px;
        line-height: 20px;
        word-break: break-all;
    }

    .me-content-text span {
        display: inline-block;
        margin: 5px;
    }

    .me-content-text:after {
        position: absolute;
        right: -24px;
        top: 4px;
        content: '';
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-right: 12px solid transparent;
        border-left: 12px solid #98e165;
    }

    .common {
        width: 100px;
    }
</style>