<template>
<nav style="height:50px;line-height:50px;" class="w-100 bg-light border-bottom px-2">
	<div class="row">
		<div class="col-6">Chat</div>
		<div class="col-6 text-right">
			<div class="dropdown" style="margin-top:-3px;">
			  <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
			    <i class="mdi mdi-account"></i>
			  </button>
			  <div class="dropdown-menu">
			    <a class="dropdown-item" href="#">Action</a>
			    <a class="dropdown-item" href="#">Another action</a>
			    <a class="dropdown-item" href="#">Something else here</a>
			  </div>
			</div>
		</div>
	</div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
  }
}
</script>