# typed: true
class BanalComplex < ApplicationRecord
    acts_as_forest :order => "weight"

    before_update :calculate_and_save_combined_weight!
    before_destroy :delete_childrens

    def delete_childrens
        self.children.destroy_all
    end

    def calculate_and_save_combined_weight!
        update_column(:weight_of_identity_plus_children, self.descendants.map(&:weight).sum)
    end

    # fails as a ruby keyword mayb? like §Fails as a directive like §Idempotent
    def descendants
        first_level_children = self.class.where(parent_id: self.id)
        second_level_children = first_level_children
            .pluck(:id)
            .reject { |id| id == self.id }
            .tap { |ids| puts ids.inspect + self.inspect }
            .map { |id| self.class.where(parent_id: id) }.flatten

        first_level_children + second_level_children
    end

    # def §Fails
    # end
end
