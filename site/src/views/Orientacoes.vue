<template>
    <div>
        <cabecalho titulo="Registros de orientações"/>
        <div class="container mb-4">
                    <div class="row mb-4">
                        <div class="col">
                            <b-form-input v-model="busca" type="text" placeholder="Pesquisar..." />
                        </div>
                    </div>
                    <b-table striped hover :items="orientacoes" :fields="fields" :per-page="10" :current-page="currentPage" :filter="busca" @filtered="onFiltered"/>
                    <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="10" size="md" />
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Cabecalho from '@/components/Cabecalho';
import BTable from 'bootstrap-vue/es/components/table/table'
import BPagination from 'bootstrap-vue/es/components/pagination/pagination'
import BFormInput from 'bootstrap-vue/es/components/form-input/form-input'
export default {
    name: 'Orientacoes',
    data: function () {
        return {
            busca: '',
            currentPage: 1,
            totalRows: 0,
            orientacoes: undefined,
            fields: [
                {
                    key: 'ORIENTADOR', 
                    sortable: true
                }, 
                {
                    key: 'NOME', 
                    sortable: true
                }, 
                {
                    key: 'ANO', 
                    sortable: true
                }
            ]
        }
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    },
    components: {
        Cabecalho, BTable, BPagination, BFormInput
    }, 
    mounted: async function () {
        try{
            const data = await axios.get('/AlumniPsiUFMG/data/orientacoes.json')
            this.orientacoes = data.data
            this.totalRows = this.orientacoes.length
        } catch (e) {
            console.log(e)
        }
    }
}
</script>

<style>

</style>
