class HomeController < ApplicationController
  def index
    @websites = Project.where(kind: 'website')
  end
end

