# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) inheritance 
class BlogPostsController < ApplicationController
  def index
    # ---2) instance variable to retrieve all blog posts from the database 
    @posts = BlogPost.all
  end

  # ---3) find a specific blogpost from the database 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) creating a new instance of blogpost model and assigning to instance bariable 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) creating a new blogpost using the submitted params from the for and assigning it
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) finding a specific blogpost from database to edit 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) updating the attributes of a specific blogpost, then checking its validity, and redirecting to the updated blogpost 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) deleting a specific blogpost from the database and redirect the indexpage of all blogposts 
      redirect_to blog_posts_path
    end
  end

  # ---9) defining a private method that can only be accesses withing the BlogPostController class
  private
  def blog_post_params
    # ---10) specify the strong params for the blogpost 
    params.require(:blog_post).permit(:title, :content)
  end
end
