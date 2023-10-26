<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test()
    {
        $data = User::all();

        echo "<pre>";
        var_dump($data);
        echo "</pre>";

        die();

        return view('test', [
            'data' => $data
        ]);
    }
}
