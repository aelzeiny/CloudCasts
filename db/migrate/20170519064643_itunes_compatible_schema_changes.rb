class ItunesCompatibleSchemaChanges < ActiveRecord::Migration[5.0]
  def change
    add_column :podcasts, :itunes_id, :integer
    add_index :podcasts, :itunes_id, unique: true
  end
end
