# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all

user1 = User.create({ username: 'demouser', password: 'demo1234', email: 'demo@kloudclone.com' })
user2 = User.create({ username: 'Hammad', password: 'charmzz', email: 'hammad@hammad.com' })
user3 = User.create({ username: 'Charm', password: 'bananas', email: 'charm@uwu.com' })
user4 = User.create({ username: 'Ariton', password: 'deepit', email: 'deep@it.com' })
user5 = User.create({ username: 'RaySounds', password: 'dokidoki', email: 'ray@gmail.com' })
user6 = User.create({ username: 'Kloud', password: 'tiffany4ever', email: 'fffan@gmail.com' })
user7 = User.create({ username: 'fusq', password: 'moeshopblush', email: 'fusq@gmail.com' })


song1 = Song.create({ artist_id: user3.id, title: 'Vibe Frog', description: 'Come vibe with us!'})
song2 = Song.create({ artist_id: user7.id, title: 'Blush'})