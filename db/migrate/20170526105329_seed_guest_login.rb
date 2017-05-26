class SeedGuestLogin < ActiveRecord::Migration[5.0]
  def change
    User.create({username: 'Guest', password: 'password'})
    User.create({username: 'guest', password: 'password'})
    User.create({username: 'User', password: 'password'})
    User.create({username: 'user', password: 'password'})
  end
end
