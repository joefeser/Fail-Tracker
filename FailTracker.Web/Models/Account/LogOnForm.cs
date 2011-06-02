using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace FailTracker.Web.Models.Account
{
	public class LogOnForm
	{
		[DisplayName("Email Address")]
		public string EmailAddress { get; set; }

		[DataType(DataType.Password)]
		public string Password { get; set; }
	}
}