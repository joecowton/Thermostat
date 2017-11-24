require 'sinatra/base'
require 'json'

class App < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end

  post '/temperature' do
    session[:temp] = params[:temp]
    200
  end

  post '/switch' do    
    session[:powerSaving] = params[:switch]
    200
  end

  get '/data' do
    content_type :json
    session[:temp] = 20 if session[:temp] == 0
    session[:switch] = true if session[:powerSaving] == 'true'
    session[:switch] = false if session[:powerSaving] == 'false'
    { currentTemp: session[:temp].to_i, powerSaving: session[:switch] }.to_json
  end

  run! if app_file == $0
end
