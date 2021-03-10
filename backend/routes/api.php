<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', [\App\Http\Controllers\AuthController::class,'login']);
    Route::post('register', [\App\Http\Controllers\AuthController::class,'register']);
    Route::post('logout', [\App\Http\Controllers\AuthController::class,'logout']);
    Route::post('refresh', [\App\Http\Controllers\AuthController::class,'refresh']);
    Route::get('user-profile', [\App\Http\Controllers\AuthController::class,'userProfile']);
});

Route::prefix('students')->group(function(){
    Route::get('',[\App\Http\Controllers\StudentController::class,'index']);
    Route::post('',[\App\Http\Controllers\StudentController::class,'store']);
    Route::put('/{id}',[\App\Http\Controllers\StudentController::class,'update']);
    Route::get('/{id}',[\App\Http\Controllers\StudentController::class,'show']);
    Route::delete('/{id}',[\App\Http\Controllers\StudentController::class,'destroy']);
});


