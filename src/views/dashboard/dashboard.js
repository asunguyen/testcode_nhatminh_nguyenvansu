import {data} from "./data.js";
import detailTrade from "@/components/detail-trade/detail-trade.vue";
export default{
    components: {
        detailTrade
    },
    data: function() {
        return {
            datav: data,
            itemSl: {}
        }
    },
    methods: {
        viewDetail: function(item) {
            this.itemSl = item;
            document.getElementById("detail-trade").style.display = "block";
        }
    }
}