#pragma strict
var velocity = Vector2(-4, 0);
function Start () {
	rigidbody2D.velocity = velocity;
	transform.position.y += Random.Range(-2,2);
  Destroy(gameObject,6);
}

function Update () {

}
