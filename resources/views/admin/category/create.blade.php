@extends('layouts.admin_layout')

@section('title', 'Додати категорію')

@section('content')
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Додати категорію</h1>
                </div>
            </div>
        </div>
    </div>

    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card card-primary">
                        <form action="{{ route('category.store') }}" method="post">
                            @csrf;

                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Назва категорії</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Назва категорії" required>
                                </div>
                            </div>

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Відправити</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
