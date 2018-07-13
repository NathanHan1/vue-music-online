import { mapGetters } from 'vuex'

export const playListMixin = {
    mounted() {
        this.handlePlayList(this.playList)
    },
    methods: {
        handlePlayList() {
            throw new Error('components must be implement handlePlayList method')
        }
    },
    watch: {
        playList(newVal) {
            this.handlePlayList(this.playList)
        }
    },
    computed: {
        ...mapGetters([
            'playList'
        ])
    }
}