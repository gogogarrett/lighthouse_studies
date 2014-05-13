module Refinery
  module Courses
    class Course < Refinery::Core::BaseModel
      self.table_name = 'refinery_courses'

      attr_accessible :title, :desc, :diff_level, :cost, :date, :position

      validates :title, :presence => true, :uniqueness => true
    end
  end
end
