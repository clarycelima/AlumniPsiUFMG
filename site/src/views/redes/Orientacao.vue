<template>
    
    <div>
        <cabecalho titulo="Redes"/>
        <div class="container mb-4">

            <h2>Laços Orientador Orientando</h2>

            <object type="image/svg+xml" style="width: 100%" data="redes/Laços Orientador Orientando.svg" ref="img">
                Your browser does not support SVG
            </object>

        </div>
    </div>
</template>

<script>
import svgPanZoom from 'svg-pan-zoom'
import Cabecalho from '@/components/Cabecalho';
export default {
    name: 'Redes',
    components: {Cabecalho},
    mounted: function () {
        this.$nextTick(() => {
            if (this.$refs.img) {
                const img = this.$refs.img;
                img.addEventListener('load', function(){
                    // Will get called after embed element was loaded
                    const pan = svgPanZoom(img, {
                        controlIconsEnabled: true
                    });
                });                
            }
        })
    }
}
</script>

<style lang="scss" scoped>

object{
    background: lighten($primary, 48);
}

</style>
