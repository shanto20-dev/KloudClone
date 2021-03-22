# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


def audio_url(source, options = {})
  url_to_asset(source, { type: :audio }.merge!(options))
end

User.destroy_all
Song.destroy_all

user1 = User.create({ username: 'demouser', password: 'demo1234', email: 'demo@kloudclone.com' })
user2 = User.create({ username: 'Hammad', password: 'charmzz', email: 'hammad@hammad.com' })
user3 = User.create({ username: 'Charm', password: 'bananas', email: 'charm@uwu.com' })
user4 = User.create({ username: 'Ariton', password: 'deepit', email: 'deep@it.com' })
user5 = User.create({ username: 'RaySounds', password: 'dokidoki', email: 'ray@gmail.com' })
user6 = User.create({ username: 'Kloud', password: 'tiffany4ever', email: 'fffan@gmail.com' })
user7 = User.create({ username: 'fusq', password: 'moeshopblush', email: 'fusq@gmail.com' })
user8 = User.create({ username: 'Mannakini', password: 'superkali', email: 'chrismann809@gmail.com' })


song1 = Song.create({ artist_id: user3.id, title: 'Vibe Frog', description: 'Come vibe with us!',})
song2 = Song.create({ artist_id: user7.id, title: 'Blush',})
song3 = Song.create({ artist_id: user6.id, title: 'Funky Frog', description: 'Sometimes you just gotta shake yo frog thang'})
song4 = Song.create({ artist_id: user3.id, title: 'Froggy Facetime', description: "Tell your folks that you love them <3"})
song6 = Song.create({ artist_id: user8.id, title: 'Yeehaw Froggy', description: 'giddy UP'})
song7 = Song.create({ artist_id: user4.id, title: 'Froggy Groove', description: "Let's GROOVE tonight"})
song8 = Song.create({ artist_id: user2.id, title: 'Froggy Sings', description: 'This froggy got PIPES'})