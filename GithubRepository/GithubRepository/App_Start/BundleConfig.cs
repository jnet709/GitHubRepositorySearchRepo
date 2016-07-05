using System.Web;
using System.Web.Optimization;

namespace GithubRepository
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
#if DEBUG
            BundleTable.EnableOptimizations = true; 
#else
            BundleTable.EnableOptimizations = true;
#endif

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // angular
            bundles.Add(new ScriptBundle("~/bundles/ng")
                .Include("~/Scripts/angular.js")
                .IncludeDirectory("~/Scripts/filters", "*.js")
                .IncludeDirectory("~/Scripts/services", "*.js") 
                .IncludeDirectory("~/Scripts/controllers", "*.js")
                .Include("~/Scripts/repoModule.js")
                .IncludeDirectory("~/Scripts/directives", "*.js")
                .IncludeDirectory("~/Scripts/runs", "*.js")
            );
        }
    }
}
