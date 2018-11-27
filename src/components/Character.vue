    <template>
        <div class="col-md-4" @click="switchCharacter">
            <div class="character-card">
                <div class="card-block">
                    <h4 class="card-title">{{character.name}}</h4>
                    <p class="card-text">Height: {{character.height}}</p>
                    <p class="card-text">Mass: {{character.mass}}kg</p>
                    <p class="card-text">Hair color: {{character.hair_color}}</p>
                    <p class="card-text">Eye color: {{character.eye_color}}</p>
                </div>
            </div>
        </div>
    </template>

    <script>
    export default {
        props: ['id'],
        data(){
            return{
                character: {}
            }
        },
        methods: {
            fetchCharacter(id){
                fetch(`https://swapi.co/api/people/${id}`, {/* chama o id do props, importante o uso de `` */
                    method: 'GET'
                }).then(response => response.json())
                .then(json => this.character = json)/* É necessario converter a resposta para json para conseguir estrutura-la
                e trata-la */
            },
            switchCharacter(){
                let random = Math.floor(Math.random() * 83) + 1
                this.fetchCharacter(random)
            }
        },
        created(){
            this.fetchCharacter(this.id)
        }
    }
    </script>

