module Api
  module V1
    class PeopleController < ApplicationController
      def index
        people = Person.all
        render json: PersonSerializer.new(people).serialized_json
      end

      def show
        person = Person.find(params[:id])
        render json: PersonSerializer.new(person, options).serialized_json
      end

      def create
        person = Person.new(person_params)

        if person.save
          render json: PersonSerializer.new(person).serialized_json
        else
          render json: { error: person.errors.messages }, status: 422
        end
      end

      def update
        person = Person.find(params[:id])

        if person.update(person_params)
          render json: PersonSerializer.new(person, options).serialized_json
        else
          render json: { error: person.errors.messages }, status: 422
        end
      end

      def destroy
        person = Person.find(params[:id])

        if person.destroy
          head :no_content
        else
          render json: { error: person.errors.messages }, status: 422
        end
      end

      private

      def person_params
        params.require(:person).permit(:first_name, :last_name, :email, :phone)
      end

      def options
        @options ||= { include: %i[positions services] }
      end
    end
  end
end