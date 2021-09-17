class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all 
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    if @pokemon
      render :show
    else
      render @pokemon.errors.full.messages, 404
    end
  end
end
