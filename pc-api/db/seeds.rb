# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
services = Service.create([
  {
    title: "Matthew 16",
    datetime: "2020-11-22 09:00:00"
  },
  {
    title: "What Do You Crave?",
    datetime: "2020-11-29 09:00:00"
  }
])

people = Person.create([
  {
    first_name: "Anthony",
    last_name: "Trombetta",
    email: "anthony@email.com",
    phone: "(256) 555-1000"
  },
  {
    first_name: "Carlos",
    last_name: "Colon",
    email: "Carlos@email.com",
    phone: "(256) 555-1001"
  },
  {
    first_name: "Mike",
    last_name: "Morgan",
    email: "mike@email.com",
    phone: "(256) 555-1002"
  }
])

positions = Position.create([
  {
    name: "Electric Guitar",
    person: people.first,
    service: services.first
  }
])