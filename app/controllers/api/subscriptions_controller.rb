class Api::SubscriptionsController < ApplicationController
  def create
    params[:subscription][:user_id] = current_user.id
    @sub = Subscription.new(subscription_params)
    if @sub.save
      @podcasts = @sub.podcasts_for_user
      render "api/podcasts/index"
		else
			render json: @sub.errors.full_messages, status: 422
    end
  end

  def destroy
    @sub = Subscription.find(params[:id])
    if @sub
      @user = @sub.podcasts_for_user
      @sub.destroy
      render "api/podcasts/index"
    else
      render json: ["User is not subscribed to this podcast"], status: 404
    end
  end

  def destroy_at
    @sub = Subscription.find_by(user_id: current_user.id, podcast_id: params[:subscription][:podcast_id])
    if @sub
      @user = @sub.podcasts_for_user
      @sub.destroy
      render "api/podcasts/index"
    else
      render json: ["User is not subscribed to this podcast"], status: 404
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:user_id, :podcast_id)
  end
end
