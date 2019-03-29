<template>
    <div>
        <cabecalho titulo="Registros de orientações"/>
        <div class="container-fluid mb-4">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-4">
                        <div class="col">
                            <b-form-input v-model="busca" type="text" placeholder="Pesquisar..." />
                        </div>
                    </div>
                    <b-table striped hover :items="orientacoes" :fields="fields" :per-page="10" :current-page="currentPage" :filter="busca"/>
                    <b-pagination v-model="currentPage" :total-rows="orientacoes.length" :per-page="10" size="md" />
                </div>
            </div>
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
    components: {
        Cabecalho, BTable, BPagination, BFormInput
    }, 
    mounted: async function () {
        try{
            const data = await axios.get('../data/orientacoes.json')
            this.orientacoes = data.data
        } catch (e) {
            console.log(e)
        }
    }
}
</script>

<style>

</style>
