# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Song.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('songs')

user1 = User.create({ username: 'demouser', password: 'demo1234', email: 'demo@kloudclone.com' })
user2 = User.create({ username: 'Hammad', password: 'charmzz', email: 'hammad@hammad.com', img_url: "https://i1.sndcdn.com/avatars-iAKleHvAqRx1Gr3G-5EUbMw-t500x500.jpg"  })
user3 = User.create({ username: 'Charm', password: 'bananas', email: 'charm@uwu.com', img_url: "https://cdna.artstation.com/p/assets/images/images/032/882/602/large/n-i-x-e-u-11dc7a49-7c91-4f62-ba7f-c4c543162b31.jpg?1607740422" })
user4 = User.create({ username: 'Ariton', password: 'deepit', email: 'deep@it.com', img_url: "https://i1.sndcdn.com/avatars-4Wj6N8S6WOjzLjVz-XBbb6Q-t500x500.jpg"  })
user5 = User.create({ username: 'RaySounds', password: 'dokidoki', email: 'ray@gmail.com', img_url: "https://i1.sndcdn.com/avatars-000651691224-w32e14-t200x200.jpg" })
user6 = User.create({ username: 'Kloud', password: 'tiffany4ever', email: 'fffan@gmail.com', img_url: "https://i1.sndcdn.com/avatars-000690273593-wxkcyb-t500x500.jpg" })
user7 = User.create({ username: 'fusq', password: 'moeshopblush', email: 'fusq@gmail.com', img_url: "https://i1.sndcdn.com/avatars-tlZcl6yaETXSz3QH-rW1JBA-t500x500.jpg" })
user8 = User.create({ username: 'Mannakini', password: 'superkali', email: 'chrismann809@gmail.com', img_url:"https://i1.sndcdn.com/avatars-000703365478-vdr0qr-t500x500.jpg"})


song1 = Song.create({ artist_id: user3.id, title: 'Vibe Frog', description: 'Come vibe with us!', img_url: "https://i1.sndcdn.com/artworks-kIJcq1OfJQjYZMiI-TbLyRA-t500x500.jpg"})
song2 = Song.create({ artist_id: user7.id, title: 'Blush', img_url: "https://i1.sndcdn.com/artworks-000265843283-72z293-t500x500.jpg"})
song3 = Song.create({ artist_id: user6.id, title: 'Funky Frog', description: 'Sometimes you just gotta shake yo frog thang', img_url: "https://i1.sndcdn.com/artworks-000244015492-r9s4p5-t500x500.jpg"})
song4 = Song.create({ artist_id: user3.id, title: 'Froggy Facetime', description: "Tell your folks that you love them <3", img_url: "https://i1.sndcdn.com/artworks-000205377325-cogbqn-t500x500.jpg"})
song5 = Song.create({ artist_id: user8.id, title: 'Yeehaw Froggy', description: 'giddy UP', img_url: "https://i1.sndcdn.com/artworks-000292030695-4tru62-t500x500.jpg"})
song6 = Song.create({ artist_id: user4.id, title: 'Froggy Groove', description: "Let's GROOVE tonight", img_url: "https://i1.sndcdn.com/artworks-000339290526-gzuyfi-t500x500.jpg"})
song7 = Song.create({ artist_id: user2.id, title: 'Froggy Sings', description: 'This froggy got PIPES', img_url: "https://i1.sndcdn.com/artworks-000154047597-1vwfz6-t500x500.jpg"})

vibeFrog = URI.open('https://kloudclone-seeds.s3.amazonaws.com/vibefrog.mp3')
blush = URI.open('https://kloudclone-seeds.s3.amazonaws.com/blush.mp3')
funkyFrog = URI.open('https://kloudclone-seeds.s3.amazonaws.com/funky_frog.mp3')
froggyFacetime = URI.open('https://kloudclone-seeds.s3.amazonaws.com/froggy_facetime.mp3')
yeehawFroggy = URI.open('https://kloudclone-seeds.s3.amazonaws.com/yeehaw_froggy.mp3')
froggyGroove = URI.open('https://kloudclone-seeds.s3.amazonaws.com/froggy_groove.mp3')
froggySings = URI.open('https://kloudclone-seeds.s3.amazonaws.com/froggy_sings.mp3')

song1.audio.attach(io: vibeFrog, filename: 'vibefrog.mp3')
song2.audio.attach(io: blush, filename: 'blush.mp3')
song3.audio.attach(io: funkyFrog, filename: 'funky_frog.mp3')
song4.audio.attach(io: froggyFacetime, filename: 'froggy_facetime.mp3')
song5.audio.attach(io: yeehawFroggy, filename: 'yeehaw_froggy.mp3')
song6.audio.attach(io: froggyGroove, filename: 'froggy_groove.mp3')
song7.audio.attach(io: froggySings, filename: 'froggy_sings.mp3')