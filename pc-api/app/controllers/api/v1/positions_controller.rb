module Api
  module V1
    class PositionsController < ApplicationController
      def show
        position = Position.find(params[:id])
        render json: PositionSerializer.new(position, options).serialized_json
      end

      def create
        create_params = params.require(:position).permit(:name, :person_id, :service_id)
        position = Position.new(create_params)

        if position.save
          render json: PositionSerializer.new(position).serialized_json
        else
          render json: { error: position.errors.messages }, status: 422
        end
      end

      def update
        update_params = params.require(:position).permit(:name, :person_id)
        position = Position.find(params[:id])

        if position.update(update_params)
          render json: PositionSerializer.new(position).serialized_json
        else
          render json: { error: position.errors.messages }, status: 422
        end
      end

      def destroy
        position = Position.find(params[:id])

        if position.destroy
          head :no_content
        else
          render json: { error: position.errors.messages }, status: 422
        end
      end

      private

      def options
        @options ||= { include: %i[person] }
      end
    end
  end
end
