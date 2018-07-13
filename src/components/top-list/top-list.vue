<template>
    <transition name="slide">
        <music-list :bg-image="image" :title="title" :songs="songs" :isrank="true"></music-list>
    </transition>
</template>

<script>
import MusicList from 'components/music-list/music-list'
import { mapGetters } from 'vuex'
import { getMusicList } from 'api/rank'
import { ERR_OK } from 'api/config'
import { isValidMusic, createSong, processSongsUrl } from 'common/js/song'

export default {
    data() {
        return {
            songs: []
        }
    },
    created() {
        this._getMusicList()
    },
    methods: {
        _getMusicList() {
            if (!this.toplist.id) {
                this.$router.push('/rank')
                return
            }
            getMusicList(this.toplist.id).then((res) => {
                if (res.code === ERR_OK) {
                    processSongsUrl(this._normalizeSongs(res.songlist)).then((songs) => {
                        this.songs = songs
                    })
                }
            })
        },
        _normalizeSongs(list) {
          let ret = []
          list.forEach((item) => {
            const musicData = item.data
            if (isValidMusic(musicData)) {
              ret.push(createSong(musicData))
            }
          })
          return ret
        }
    },
    computed: {
        image() {
            return this.toplist.picUrl
        },
        title() {
            return this.toplist.topTitle
        },
        ...mapGetters([
            'toplist'
        ])
    },
    components: {
        MusicList
    }
}
</script>

<style lang="stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease

  .slide-enter, .slide-leave-to
    transform: opacity 0
</style>
