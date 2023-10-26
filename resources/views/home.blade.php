@extends('layouts.app')
@section('content')
<main class="pt-20 flex-1">
    	<h1 class="text-3xl font-extrabold underline">
    		Home
    	</h1>
    	<div x-data="{ open: false }" x-init="console.log(<?php echo json_encode($data); ?>)">
    		<button @click="open = ! open">Toggle Content</button>
    		<div x-show="open">
    			Content...
    		</div>
    	</div>
    </main>
@endsection

