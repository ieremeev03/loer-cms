<?php

namespace App\Providers;

use App\Models\Infoblock\Infoblock;
use App\Models\Page;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/admin';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function map()
    {
        $this->mapAdminRoutes();
        $this->mapApiRoutes();
        $this->mapWebRoutes();
    }

    protected function mapWebRoutes()
    {
        Route::middleware('web')
            ->group(base_path('routes/web.php'));
    }

    protected function mapApiRoutes()
    {
        Route::middleware('api')
            ->prefix('api')
            ->group(base_path('routes/api.php'));
    }

    protected function mapAdminRoutes(){
        Route::middleware('admin')
            ->prefix('admin')
            ->group(base_path('routes/admin.php'));
    }



    public function boot(): void
    {
        $this->bootRouteModelBinders();
        $this->configureRateLimiting();
        $this->bootRouteParameterBinders();
        Route::model('infoblock', Infoblock::class);
    }

    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        RateLimiter::for('admin', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });
    }

    private function bootRouteModelBinders()
    {

        Route::model('page', Page::class);

    }

    private function bootRouteParameterBinders()
    {
        Route::bind('pSlug', function ($slug) {
            return Page::with('parent')->where('slug', $slug)->firstOrFail();
        });
        /** GENERATOR_PARAMETER_BINDER **/
    }
}
