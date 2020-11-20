module Api
  module V1
    class ServicesController < ApplicationController
      def index
        services = Service.all
        render json: ServiceSerializer.new(services, options).serialized_json
      end

      def show
        service = Service.find(params[:id])
        render json: ServiceSerializer.new(service, options).serialized_json
      end

      def create
        service = Service.new(service_params)

        if service.save
          render json: ServiceSerializer.new(service).serialized_json
        else
          render json: { error: service.errors.messages }, status: 422
        end
      end

      def update
        service = Service.find(params[:id])

        if service.update(service_params)
          render json: ServiceSerializer.new(service, options).serialized_json
        else
          render json: { error: service.errors.messages }, status: 422
        end
      end

      def destroy
        service = Service.find(params[:id])

        if service.destroy
          head :no_content
        else
          render json: { error: service.errors.messages }, status: 422
        end
      end

      private

      def service_params
        params.require(:service).permit(:title, :datetime)
      end

      def options 
        @options ||= { include: %i[positions] }
      end
    end
  end
end