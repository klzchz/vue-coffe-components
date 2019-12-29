let PlanPickerItemComponent =  {
    template: '#plan-picker-item-template',

    props: {
      name: {
        type: String,
        required: true
      },
      selectedPlan:{
        type:String,
      }
    },

    data() {
        return {
            selected:false,
        }
    },
    methods: {
        select()
        {   
            this.$emit('select',this.name);
         
        }
    },
    computed: {
      isSelect()
      {
        var response =  this.selectedPlan ===  this.name;
        return response;
      }
    },
  }
  


let PlanPickerComponent = {
    template:"#plan-picker",
    components:{
        "plan-picker-item": PlanPickerItemComponent,
    },
    data() {
      return {
          selectedPlan:null,
          
      }
    },
    props:{
        plans:{
            required:true,
            type:Array,
        }
    },
    methods: {
      selectPlan(params)
      {
        this.selectedPlan = params;
        console.log(this.selectedPlan);
        

      },
   
    },
  
  }

  new Vue({
    el: '#app',
    data: {
      plans: ['The Single', 'The Curious', 'The Addict']
    },
    components:{
        PlanPicker:PlanPickerComponent,
    },
  });