class Api::SubscriptionsController < ApplicationController
  def create
    @sub = Subscription.new(subscription_params)
    if @sub.save
      @podcasts = @sub.user.podcasts
      render "api/podcasts/index"
		else
			render json: @sub.errors.full_messages, status: 422
  end

  def destroy
    @sub = Subscription.find(params[:id])
    if @sub
      @sub.destroy
      @podcasts = @sub.user.podcasts
      render "api/podcasts/index"
    else
      render json: ["User is not subscribed to this podcast"], status: 404
    end
  end

  private

  def subscription_params
    @params.require(:subscription).permit(:user_id, :podcast_id)
  end
end