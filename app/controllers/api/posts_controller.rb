module API
  class PostsController < BaseController
    def index
      render json: { message: 'Posts ready' }
    end
  end
end
