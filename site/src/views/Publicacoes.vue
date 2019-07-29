<template>
    <div>
        <cabecalho titulo="Registros de artigos"/>
        <div class="container mb-4">
                    <div class="row mb-4">
                        <div class="col">
                            <b-form-input v-model="busca" type="text" placeholder="Pesquisar..." />
                        </div>
                    </div>
                    <b-table striped hover :items="publicacoes" :fields="fields" :per-page="10" :current-page="currentPage" :filter="busca" @filtered="onFiltered"/>
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
    name: 'Publicacoes',
    data: function () {
        return {
            busca: '',
            currentPage: 1,
            totalRows: 0,
            publicacoes: [],
            fields: [
                {
                    key: 'AUTORES', 
                    sortable: true
                },
                {
                    key: 'TITULO', 
                    sortable: true
                }, 
                {
                    key: 'REVISTA', 
                    sortable: true
                },
                {
                    key: 'ANO', 
                    sortable: true
                },
                {
                    key: 'EDICAO', 
                    sortable: true
                },
                {
                    key: 'PAGINA', 
                    sortable: true
                },
                {
                    key: 'ISSN', 
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
            const data = await axios.get('/AlumniPsiUFMG/data/artigos.json')
            this.publicacoes = data.data
            this.totalRows = this.publicacoes.length
        } catch (e) {
            console.log(e)
        }
    }
}
</script>

<style>

</style>
