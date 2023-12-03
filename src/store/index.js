import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store
    ({
        state: {
            header: 'Minimal Look Bedrooms',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
            // initial state
        },
        mutations: {
            // state changing methods 
        },
        actions: {
            // asynchronous operations methods 
        }
        ,
        getters: {
            // state reading methods 
            getHeader: (state) => state.header,
            getText: (state) => state.text
        },
        modules: {
            // Vuex modules for the division of the storage into substorages 
        }
    });